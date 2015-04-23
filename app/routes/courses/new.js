import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var course = this.store.createRecord('course');
    return course;
  },
  actions: {
        createCourse: function() {
            var self = this;
            this.controller.get('model').save()
            .then( 
                function(data) { 
                  self.transitionTo('/admin/courses/'+data.id);
            });
        }
  }
});
