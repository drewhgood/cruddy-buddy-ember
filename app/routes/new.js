import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var employee = this.store.createRecord('employee');
    return employee;
  },
  actions: {
        submitAction: function() {
            var self = this;
            alert('test');
            this.controller.get('model').save()
            .then(
                function(data) { 
                  self.transitionTo('admin/employees/'+data.id);
            });
        }
  }
});
