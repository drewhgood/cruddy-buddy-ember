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
            var self = this.controller.get('model')
            self.destroy();
        }
  }

});
