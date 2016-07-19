// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function () {
    $.get('https://api.parse.com/1/classes/songs/', data => {
      data.results.map(song => {
        song.playCount = 0;
        return song;
      })
      this.reset(data.results);
    });
  }
});