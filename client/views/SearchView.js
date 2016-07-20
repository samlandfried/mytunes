var SearchView = Backbone.View.extend({

  el: `<form id="search">
        <input type="text" name="input">
        <input type="submit" class="searchbutton" value="Search">
        <br>
      </form>`,

  initialize: function() {
    console.log(this.$el.children('.searchbutton'));
    this.$el.submit(event => {
      event.preventDefault();
      this.collection.search(event.target[0].value);
    })

    // .on('click', () => {
    //   this.collection.search(this.$el.children()[0].value);
    // });
  },

  render: () => this.$el
});