import DS from 'ember-data';

// Course
export default DS.Model.extend({

  category: DS.belongsTo('category'),
  name: DS.attr(),
  capacity: DS.attr(),
  session_cost: DS.attr()
  
});
