import Ember from 'ember';

export default Ember.Controller.extend({

  properties: {
    checkingOut:false
  },


  actions:{
    test: function(){
    this.set('properties.checkingOut' , true);
    $('#cart').css('height', '100%');
    }
  },

});
