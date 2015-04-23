import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
        return {course: this.store.find('course')};
  }
});
