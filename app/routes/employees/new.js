import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var employee = this.store.createRecord('employee');
    employee.names=['Male','Female'];
    return employee;
  },
  actions: {
        createEmployee: function() {
            var self = this;
            this.controller.get('model').save()
            .then( 
                function(data) { 
                  self.transitionTo('/admin/employees/'+data.id);
            });
        }
  }
});
