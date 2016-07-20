var SearchView = Backbone.View.extend({

  el: `<form>
        <input type="text" class="search">
        <input type="submit" value="Search" class="search">
        <br>
      </form>`,

  render: () => this.$el
});