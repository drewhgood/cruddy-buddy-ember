import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
    return {course: this.store.fetchById('course',params.id)};
  }
});