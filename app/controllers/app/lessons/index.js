import Ember from 'ember';

export default Ember.Controller.extend({

  properties: {
    checkingOut:false
  },


  actions:{
    expandCart: function(){
      this.set('properties.checkingOut' , true);
      $('#cart').css('height', '100%');
      $('#cart').css('padding-top', '55px');
      $('#cart h2').css('padding-top', '55px');
    },

    expandCart: function(){
      this.set('properties.checkingOut' , true);
      $('#cart').css('height', '100%');
      $('#cart').css('padding-top', '55px');
      $('#cart h2').css('padding-top', '55px');
    }
  },

});
