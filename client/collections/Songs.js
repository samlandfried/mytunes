// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    $.get('https://api.parse.com/1/classes/songs/', data => {
      data.results.map(song => {
        song.playCount = 0;
        return song;
      });
      this.reset(data.results);
    });
  },

  search: function(query) {
    $.ajax({
      type: "GET",
      url: 'https://api.parse.com/1/classes/songs/',
      data: `where={"title":{"$regex":"${query}"}}`,
      success: data => {
        data.results.map(song => {
          song.playCount = 0;
          return song;
        });
        this.reset(data.results);
      },
      failure: error => console.error(error)
    });
    // A successful request looks like
  // GET /1/classes/songs/?where={%22title%22:%22Back%20and%20Forth%22} HTTP/1.1
  // GET /1/classes/songs/?where={%22title%22:{%22$in%22:%22Back%20and%20Forth%22}} HTTP/1.1





  }
});
