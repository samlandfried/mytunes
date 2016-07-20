var SearchModel = Backbone.Model.extend({
  // This might be unnecessary. SearchView clicks should activate a search from Songs
  search: function() {
    this.trigger()
  }
});