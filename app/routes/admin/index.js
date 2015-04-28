import Ember from 'ember';

export default Ember.Route.extend({

   model: function() {
    return {dashboards: this.store.find('dashboard')};
  },  


});
