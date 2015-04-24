import DS from 'ember-data';

// Course
export default DS.Model.extend({

  events: DS.hasMany('event', {async: true}),
  category: DS.belongsTo('category', {async: true}),
  name: DS.attr(),
  capacity: DS.attr(),
  session_cost: DS.attr(),
  level: DS.attr()
  
});