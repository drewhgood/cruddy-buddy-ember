import DS from 'ember-data';

export default DS.Model.extend({

  employee: DS.belongsTo('employee', {async: true}),
  privileges1: DS.attr(),
  privileges2: DS.attr(),
  privileges3: DS.attr(),
  privileges4: DS.attr(),

});
