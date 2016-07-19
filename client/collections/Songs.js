// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function () {
    $.get('https://api.parse.com/1/classes/songs/', data => this.buildLibrary(data.results));
  },

  buildLibrary: data => {
    var self = this;
    console.log(self);
  }
    

});