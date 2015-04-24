import DS from 'ember-data';

export default DS.Model.extend({

  course: DS.belongsTo('course', {async: true}),
  employee: DS.belongsTo('employee', {async: true}),
  start_time: DS.attr(),
  duration: DS.attr(),


  end_time: function() {
  //WIP   return this.get('first_name') + ' ' + this.get('last_name');
  // }.property('first_name', 'last_name')
  }

});