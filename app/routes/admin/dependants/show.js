import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
    return {dependant: this.store.fetchById('dependant',params.id)};
  }
});