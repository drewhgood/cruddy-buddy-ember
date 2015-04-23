import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
        return {employee: this.store.find('employee'),user: this.store.find('user')};
// return this.store.find('employee');
  }
});
