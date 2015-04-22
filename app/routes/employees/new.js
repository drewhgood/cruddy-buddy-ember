import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var employee = this.store.createRecord('employee');
    return employee;
  },
  actions: {
        submitAction: function() {
            var self = this;
            this.controller.get('model').save()
            .then( 
                function(data) { 
                  self.transitionTo('/employees/'+data.id);
            });
        }
  }
});
