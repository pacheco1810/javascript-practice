# Playlist Remix

This exercise creates a playlist remix engine that processes multiple listener playlists into a single scheduled broadcast.

---

# Problem

Build a program that creates a single remix playlist from multiple listener-submitted playlists. Each listener provides a list of songs they want to hear. Some songs may appear multiple times, and some artists may appear too many times. Process these lists step by step: flatten them into one list, score each track, remove duplicate tracks, limit how many times the same artist appears, and create a final broadcast order.

---

### Example

Input:

playlists = [
  [
    { trackId: "trk101", artist: "Velvet Comet", votes: 5, bpm: 122 },
    { trackId: "trk102", artist: "Neon Harbor", votes: 2, bpm: 108 }
  ],
  [
    { trackId: "trk201", artist: "Solar Echo", votes: 3, bpm: 115 },
    { trackId: "trk202", artist: "Velvet Comet", votes: 6, bpm: 124 }
  ]
]

Output (remixPlaylist with maxPerArtist = 1):

[
  { slot: 1, trackId: 'trk101' },
  { slot: 2, trackId: 'trk102' },
  { slot: 3, trackId: 'trk201' }
]

---

# Folder Structure

playlist-remix/
│
├── playlistRemix.js
├── playlistRemix.test.js
└── README.md

---

# Functions Implemented

---

## 1. flattenPlaylists

* Takes a nested array of playlists
* Returns a flat array with source property [playlistIndex, trackIndex]
* Returns empty array for non-array input

## 2. scoreTracks

* Takes flattened tracks
* Adds score property using formula: votes × 10 - |bpm - 120|
* Higher score = better track

## 3. dedupeTracks

* Takes scored tracks
* Removes duplicate trackIds keeping first occurrence

## 4. enforceArtistQuota

* Takes deduplicated tracks
* Limits tracks per artist to maxPerArtist
* Keeps earliest occurrences

## 5. buildSchedule

* Takes quota-enforced tracks
* Returns array of { slot, trackId } with 1-based indexing

## 6. remixPlaylist

* Integrates all functions in order
* Returns final broadcast schedule

---

# Concepts Practiced

* Array flattening with reduce
* Object transformation
* Set for deduplication
* Artist quota enforcement
* Pipeline composition

---

# Time Complexity

O(n) for each function where n is total number of tracks

---

# Author

Angel Andrei Espiritu Pacheco