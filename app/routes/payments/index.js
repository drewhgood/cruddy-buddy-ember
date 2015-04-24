import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
        return {payment: this.store.find('payment')};
  }
});
