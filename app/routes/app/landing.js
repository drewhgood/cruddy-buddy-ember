import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
    return {courses: this.store.find('course',  {limit: 3})};
  }
});