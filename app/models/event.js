import DS from 'ember-data';

export default DS.Model.extend({

  course: DS.belongsTo('course'),
  employee: DS.belongsTo('employee'),
  start_time: DS.attr(),
  end_time: DS.attr(),
  duration: DS.attr(),

});