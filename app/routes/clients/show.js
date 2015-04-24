import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
        return {client: this.store.find('client', params.id)};
// return this.store.find('employee');
  }
});