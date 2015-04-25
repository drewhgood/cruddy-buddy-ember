import DS from 'ember-data';

export default DS.Model.extend({

  course: DS.belongsTo('course', {async: true}),
  employee: DS.belongsTo('employee', {async: true}),
  start_time: DS.attr(),
  duration: DS.attr(),

  end_time: function() {
    var start_time = new Date(this.get('start_time'));

    start_time.setHours(start_time.getHours() + parseInt(this.get('duration')));

      var end_datetime = start_time.getHours();
    return end_datetime;
  }.property('start_time,duration')

});