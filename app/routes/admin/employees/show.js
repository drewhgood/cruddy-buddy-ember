import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return {employee: this.store.fetchById('employee',params.id)};
  }
});
