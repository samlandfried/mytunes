// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  // When does this fire? When a song is added, or when its first created? Im betting created.
  initialize: function() {

  }

});