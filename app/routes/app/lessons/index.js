import Ember from 'ember';

export default Ember.Route.extend({


  model: function() {
        return {courses: this.store.find('course')};
  },

  actions: {
    addToCart: function(course) {
      $('#cart').fadeIn(1000, function(){
        $('#registrationFormClient').fadeIn(500);
      });
        course.setProperties({
        inCart: true,
      })     
    },

  removeFromCart: function(course) {

      course.setProperties({
        inCart: false,
      })     
    }  
  }

});
