import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return {payment: this.store.fetchById('payment',params.id)};
  }
});
