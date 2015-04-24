import DS from 'ember-data';

// Course
export default DS.Model.extend({

  client: DS.belongsTo('client'),
  name: DS.attr(),
  capacity: DS.attr(),
  session_cost: DS.attr()
  
});
