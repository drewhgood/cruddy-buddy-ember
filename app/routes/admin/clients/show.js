import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
    return {client: this.store.fetchById('client',params.id)};
  }
});