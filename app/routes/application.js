import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
    show: function() {
      $('#cart').fadeIn(1000);
    }, 
    hide: function() {
      $('#cart').fadeOut(1000);
    }
  },
  
    //   redirect: function () {
    //     this.transitionTo('/home');
    // }
});
