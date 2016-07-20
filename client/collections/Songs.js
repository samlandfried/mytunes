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
    $.get('https://api.parse.com/1/classes/songs/', data => {
      var results = data.results
        .filter(song => {
          if ( song.title.includes(query) ) {
            console.log(song.title, query);
            return song;
          }
        })
        .map(song => {
          song.playCount = 0;
          return song;
      });
      console.log(results);
      this.reset(results);
    });

    // This is responding with a 403 forbidden error. I'm going to assume that its impossible to make a post request to this server, although its possible (likely?) I'm just formatting it incorrectly. 
    // $.ajax({
    //   type: "POST",
    //   url: 'https://api.parse.com/1/classes/songs/',
    //   data: JSON.stringify({artist: 'Aaliyah'}),
    //   success: data => console.log(data),
    //   failure: data => console.log(data),
    //   dataType: 'application/json'
    // });
  }
});
