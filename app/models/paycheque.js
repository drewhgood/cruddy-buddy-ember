import DS from 'ember-data';

export default DS.Model.extend({

  employee: DS.belongsTo('employee', {async: true}),
  hours: DS.attr(),
  total: DS.attr(),
  is_paid: DS.attr(),
  payment_method: DS.attr(),
  payment_date: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr(),

});
