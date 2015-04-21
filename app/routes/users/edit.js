import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
        submitAction: function() {
            var self = this;
            this.controller.get('model').save().then( 
              function() { 
                //     self.transitionTo('index');
            });
        }, 

        destroyUser: function() {
            // this.controller.get('model').destroy();
            var user = this.controller.get('model');
            user.deleteRecord();
            user.save();
             
        }
  }

});
