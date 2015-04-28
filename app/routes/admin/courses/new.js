import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var course = this.store.createRecord('course');
    var categories = this.store.find('category');
    return {course,categories}
  },
  actions: {
    createCourse: function() {
      var self = this;
      var course = this.controller.get('model.course');
      var category = this.store.find('category',$('#course_category').find(":selected").attr('data-id')).then(function(category){
        course.set('category',category); 
        course.save()
        .then( 
          function(data) { 
            self.transitionTo('/admin/courses/'+data.id);
      });
      })    
    
    }
  }
});
