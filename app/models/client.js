import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  // dependants: DS.hasMany('dependant', {async:true}),
  notes: DS.attr() 
});
