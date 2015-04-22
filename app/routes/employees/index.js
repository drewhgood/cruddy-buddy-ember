import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
        return {employee: this.store.find('employee')};
  }
});
