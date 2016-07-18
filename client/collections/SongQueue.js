// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  // When does this fire? When a song is added, or when its first created? Im betting created.
  initialize: function() {
    this.on('add', function () {
      if ( this.length === 1 ) {
        this.playFirst(this.models[0]);
      }
    });
  },

  playFirst: function(song) {
    song.play();
  }

});