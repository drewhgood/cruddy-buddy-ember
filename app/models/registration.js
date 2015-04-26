import DS from 'ember-data';


export default DS.Model.extend({
  course: DS.belongsTo('course', {async: true}),
  payment: DS.belongsTo('payment', {async: true}),
  client: DS.belongsTo('client', {async: true}),
  dependant: DS.belongsTo('dependant', {async: true}),
  created_at: DS.attr(),
  updated_at: DS.attr(),
});
