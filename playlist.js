function Playlist(name) {
  this.name = name;            // Sets the name of the playlist
  this.songs = [];              // Initializes an empty array to hold songs
  this.currentSong = null;      // Initially, no song is playing
}

Playlist.prototype.addSong = function(songTitle) {
  this.songs.push(songTitle);  // Adds a song to the playlist
};

Playlist.prototype.playFirst = function() {
  if (this.songs.length > 0) {
    this.currentSong = this.songs[0];  // Sets the first song as the current song
    console.log("Now playing:", this.currentSong);  // Logs the song being played
  }
};

Playlist.prototype.skipSong = function() {
  if (this.songs.length > 1) {
    this.songs.shift();              // Removes the first song from the array
    this.currentSong = this.songs[0]; // Updates the current song to the new first song
    console.log("Skipped! Now playing:", this.currentSong);  // Logs the new song being played
  } else {
    console.log("No more songs to skip.");  // If there's only one song left, we can't skip
  }
};

Playlist.prototype.listSongs = function() {
  console.log("Playlist:", this.name);  // Logs the name of the playlist
  console.log("Songs:", this.songs.join(", "));  // Logs all the songs in the playlist as a comma-separated string
};

// Testing the Playlist functionality
let myMix = new Playlist("My Chill Mix");
myMix.addSong("Lofi Study");
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");
myMix.playFirst();
myMix.skipSong();
myMix.listSongs();
