import DS from 'ember-data';

// Course
export default DS.Model.extend({

  registrations: DS.hasMany('registration', {async:true}),
  events: DS.hasMany('event', {async: true}),
  category: DS.belongsTo('category', {async: true}),
  name: DS.attr(),
  capacity: DS.attr(),
  session_cost: DS.attr(),
  level: DS.attr(),


  start_date: function(){

    var events = this.get('events').toArray();
    var smallest_date = new Date(events[0].get('start_time'));
    var month = ["January","February","March","March","May","June","July","August","September","October","November","December"];

    events.forEach(function(e, index){  

      var event_start_time =  new Date(e.get('start_time'));

      if(smallest_date > event_start_time) {
        smallest_date = event_start_time;
      }
    });

    return month[smallest_date.getMonth()] + '/' + smallest_date.getDate();

  }.property('events.@each.start_time')

  spotsFilled: function() {
    return this.get('registrations.length');
  }.property('registrations.@each'),

  atCapacity: function() {
    var cap = this.get('capacity');
    var filled = this.get('spotsFilled');
    return cap <= filled;
  }.property('spotsFilled.@each', 'capacity.@each'),




});