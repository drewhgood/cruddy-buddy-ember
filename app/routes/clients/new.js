import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var client = this.store.createRecord('client');
    return client;
  },
  actions: {
        createClient: function() {
            var self = this;
            this.controller.get('model').save()
            .then( 
                function(data) { 
                  self.transitionTo('/clients/'+data.id);
            });
        }
  }
});
