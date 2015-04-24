import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var category = this.store.createRecord('category');
    return category;
  },
  actions: {
        createCategory: function() {
            var self = this;
            this.controller.get('model').save()
            .then( 
                function(data) { 
                  self.transitionTo('/admin/categories/'+data.id);
            });
        }
  } 

});
