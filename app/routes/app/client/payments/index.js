import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
        return {client: this.store.find('client',3)};

  }

});
