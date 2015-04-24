import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return {employee: this.store.find('employee',params.id), course: this.store.find('course')};
  }
});
