/**
 * Problem: Create a playlist remix engine that processes multiple playlists
 * Topic: Arrays
 * Difficulty: Medium
 */

// Input: flattenPlaylists(playlists)
// Output: Array of track objects with source property

// Input: scoreTracks(flattenedTracks)
// Output: Array of track objects with score property

// Input: dedupeTracks(scoredTracks)
// Output: Array of unique tracks by trackId

// Input: enforceArtistQuota(dedupedTracks, maxPerArtist)
// Output: Array with limited tracks per artist

// Input: buildSchedule(enforcedTracks)
// Output: Array of { slot, trackId } objects

// Input: remixPlaylist(playlists, maxPerArtist)
// Output: Array of { slot, trackId } objects

function flattenPlaylists(arrPlaylists){
  if(!Array.isArray(arrPlaylists)) return [];

  return arrPlaylists.reduce((acc, playlist, i) => {
    let transformed = playlist.map((track, j) => {
      return {...track, source: [i, j]};
    });
    acc.push(...transformed);
    return acc;
  }, []); 
}

function scoreTracks(arrPlaylistsObj){
  return arrPlaylistsObj.reduce((acc, track) => {
    acc.push({...track, score: track.votes * 10 - Math.abs(track.bpm - 120)});
    return acc; 
  }, []);
}

function dedupeTracks(arrPlaylistsObj){
  let seen = new Set();
  return arrPlaylistsObj.filter(track => {
    if(seen.has(track.trackId)) return false;
    seen.add(track.trackId);
    return true;
  }); 
}

function enforceArtistQuota(arrPlaylistsObj, maxPerArtist){
  let count = {};

  return arrPlaylistsObj.reduce((acc, track) => {
    count[track.artist] = (count[track.artist] ?? 0) + 1;
    if (count[track.artist] <= maxPerArtist){
      acc.push(track);
    }
    return acc; 
  }, []);
}

function buildSchedule(arrPlaylistsObj){
  return arrPlaylistsObj.reduce((acc, track, index) => {
    acc.push({slot: index + 1, trackId: track.trackId});
    return acc; 
  }, []);
}

function remixPlaylist(arrPlaylistsObj, maxPerArtist = 1){
  const flat = flattenPlaylists(arrPlaylistsObj); 
  const scored = scoreTracks(flat);
  const deduped = dedupeTracks(scored);
  const enforced = enforceArtistQuota(deduped, maxPerArtist);

  return buildSchedule(enforced);
}

module.exports = {
  flattenPlaylists,
  scoreTracks,
  dedupeTracks,
  enforceArtistQuota,
  buildSchedule,
  remixPlaylist
};