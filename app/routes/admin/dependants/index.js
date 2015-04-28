import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
        return {dependant: this.store.find('dependant')};
// return this.store.find('employee');
  }

});
