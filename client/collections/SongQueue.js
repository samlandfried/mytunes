// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  // When does this fire? When a song is added, or when its first created? Im betting created.
  initialize: function() {
    this.on('add', function () {
      if ( this.length === 1 ) {
        this.playFirst();
      }
    });

    this.on('ended', function () {
      this.remove(this.at(0));
      if ( this.length ) {
        this.playFirst();
      }
    });

    this.on('dequeue', function (song) {
      this.remove(this.at(this.get(song.cid)));
    });
  },

  playFirst: function() {
    this.at(0).play();
  }
});