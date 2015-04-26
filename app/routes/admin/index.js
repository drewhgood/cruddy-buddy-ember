import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, client){
    controller.set('model', client.get('client'));
  }
});
