const { 
  flattenPlaylists, 
  scoreTracks, 
  dedupeTracks, 
  enforceArtistQuota, 
  buildSchedule,
  remixPlaylist
} = require('./playlistRemix');

const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

describe('flattenPlaylists', () => {
  test('flattens nested playlists and adds source property', () => {
    const result = flattenPlaylists(playlists);
    expect(result.length).toBe(5);
    expect(result[0].source).toEqual([0, 0]);
    expect(result[1].source).toEqual([0, 1]);
    expect(result[2].source).toEqual([0, 2]);
    expect(result[3].source).toEqual([1, 0]);
    expect(result[4].source).toEqual([1, 1]);
  });

  test('returns empty array for non-array input', () => {
    expect(flattenPlaylists(null)).toEqual([]);
    expect(flattenPlaylists("invalid")).toEqual([]);
    expect(flattenPlaylists(123)).toEqual([]);
  });
});

describe('scoreTracks', () => {
  test('adds score property to each track using formula: votes * 10 - |bpm - 120|', () => {
    const flat = flattenPlaylists(playlists);
    const result = scoreTracks(flat);
    
    expect(result[0].score).toBe(5 * 10 - Math.abs(122 - 120));
    expect(result[1].score).toBe(2 * 10 - Math.abs(108 - 120));
    expect(result[2].score).toBe(4 * 10 - Math.abs(128 - 120));
    expect(result[3].score).toBe(3 * 10 - Math.abs(115 - 120));
    expect(result[4].score).toBe(6 * 10 - Math.abs(124 - 120));
  });

  test('preserves all original properties', () => {
    const flat = flattenPlaylists(playlists);
    const result = scoreTracks(flat);
    expect(result[0]).toHaveProperty('trackId');
    expect(result[0]).toHaveProperty('artist');
    expect(result[0]).toHaveProperty('title');
    expect(result[0]).toHaveProperty('votes');
    expect(result[0]).toHaveProperty('bpm');
    expect(result[0]).toHaveProperty('source');
    expect(result[0]).toHaveProperty('score');
  });
});

describe('dedupeTracks', () => {
  test('removes duplicate trackIds keeping first occurrence', () => {
    const flat = flattenPlaylists(playlists);
    const scored = scoreTracks(flat);
    const result = dedupeTracks(scored);
    
    const trackIds = result.map(t => t.trackId);
    expect(trackIds).toEqual(['trk101', 'trk102', 'trk103', 'trk201', 'trk202']);
    expect(new Set(trackIds).size).toBe(trackIds.length);
  });

  test('handles duplicates correctly', () => {
    const withDuplicates = [
      { trackId: 'A', artist: 'Artist1' },
      { trackId: 'B', artist: 'Artist2' },
      { trackId: 'A', artist: 'Artist1' }
    ];
    const result = dedupeTracks(withDuplicates);
    expect(result.length).toBe(2);
    expect(result[0].trackId).toBe('A');
    expect(result[1].trackId).toBe('B');
  });
});

describe('enforceArtistQuota', () => {
  test('limits number of tracks per artist to maxPerArtist', () => {
    const flat = flattenPlaylists(playlists);
    const scored = scoreTracks(flat);
    const deduped = dedupeTracks(scored);
    const result = enforceArtistQuota(deduped, 1);
    
    const velvetCometCount = result.filter(t => t.artist === 'Velvet Comet').length;
    expect(velvetCometCount).toBe(1);
    expect(result.length).toBe(4);
  });

  test('keeps earliest occurrences when limiting', () => {
    const flat = flattenPlaylists(playlists);
    const scored = scoreTracks(flat);
    const deduped = dedupeTracks(scored);
    const result = enforceArtistQuota(deduped, 1);
    
    const velvetCometTrack = result.find(t => t.artist === 'Velvet Comet');
    expect(velvetCometTrack.trackId).toBe('trk101');
  });

  test('handles maxPerArtist larger than artist count', () => {
    const flat = flattenPlaylists(playlists);
    const scored = scoreTracks(flat);
    const deduped = dedupeTracks(scored);
    const result = enforceArtistQuota(deduped, 10);
    expect(result.length).toBe(5);
  });
});

describe('buildSchedule', () => {
  test('creates schedule with 1-based slots and trackIds', () => {
    const flat = flattenPlaylists(playlists);
    const scored = scoreTracks(flat);
    const deduped = dedupeTracks(scored);
    const enforced = enforceArtistQuota(deduped, 1);
    const result = buildSchedule(enforced);
    
    expect(result).toEqual([
      { slot: 1, trackId: 'trk101' },
      { slot: 2, trackId: 'trk102' },
      { slot: 3, trackId: 'trk103' },
      { slot: 4, trackId: 'trk201' }
    ]);
  });

  test('handles empty array', () => {
    expect(buildSchedule([])).toEqual([]);
  });
});

describe('remixPlaylist', () => {
  test('integrates all functions to produce final schedule', () => {
    const result = remixPlaylist(playlists, 1);
    
    expect(result).toEqual([
      { slot: 1, trackId: 'trk101' },
      { slot: 2, trackId: 'trk102' },
      { slot: 3, trackId: 'trk103' },
      { slot: 4, trackId: 'trk201' }
    ]);
  });

  test('works with different maxPerArtist values', () => {
    const result = remixPlaylist(playlists, 2);
    
    expect(result).toEqual([
      { slot: 1, trackId: 'trk101' },
      { slot: 2, trackId: 'trk102' },
      { slot: 3, trackId: 'trk103' },
      { slot: 4, trackId: 'trk201' },
      { slot: 5, trackId: 'trk202' }
    ]);
  });
});