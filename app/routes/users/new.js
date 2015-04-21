import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var user = this.store.createRecord('user');
    return user;
  },
  actions: {
        submitAction: function() {
            var self = this;
            this.controller.get('model').save()
            .then( 
                function(data) { 
                  self.transitionTo('/users/'+data.id);
            });
        }
  }
});
