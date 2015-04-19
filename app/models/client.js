import DS from 'ember-data';

export default DS.Model.extend({
  dependants: DS.hasMany('dependant', {async:true}),
  notes: DS.attr(), 
});
