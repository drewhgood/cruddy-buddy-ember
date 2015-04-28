import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
    return {category: this.store.fetchById('category',params.id)};
  }
});
