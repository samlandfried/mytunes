var SearchView = Backbone.View.extend({

  el: `<form>
        <input type="text" class="search">
        <input type="submit" value="Search" class="search">
        <br>
      </form>`,

  initialize: function() {
    console.log(this);
    this.$el.on('click', () => console.log('click!'));
  },

  render: () => this.$el
});