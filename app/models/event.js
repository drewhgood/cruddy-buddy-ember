import DS from 'ember-data';

export default DS.Model.extend({

  course: DS.belongsTo('course', {async: true}),
  employee: DS.belongsTo('employee', {async: true}),
  start_time: DS.attr('date'),
  duration: DS.attr('number'),

  displayStartDate: function(){
    var startTime = new Date(this.get('start_time'));

    return moment(startTime).format('MMM Do');
  }.property('start_time'),



  displayStartTime: function(){
    var startTime = new Date(this.get('start_time'));

    return moment(startTime).format('h:mm a');
  }.property('start_time'),


  displayEndTime: function() {
    var start_time = new Date(this.get('start_time'));

    start_time.setHours(start_time.getHours() + this.get('duration'));

    return moment(start_time).format('h:mm a');
  }.property('start_time,duration')

});