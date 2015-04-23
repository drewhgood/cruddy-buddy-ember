import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
        return {category: this.store.find('category')};
  }
});
