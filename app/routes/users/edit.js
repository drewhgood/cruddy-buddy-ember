import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
        saveUser: function() {
            var self = this;
            this.controller.get('model').save().then( 
              function() { 
                //     self.transitionTo('index');
            });
        }, 

        destroyUser: function() {
            // this.controller.get('model').destroy();
            var self = this;
            var user = this.controller.get('model');
            user.deleteRecord();
            user.save().then( 
              function() { 
                    self.transitionTo('users.index');
            });
             
        }
  }

});
