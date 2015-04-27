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
  description: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr(),
  inCart: false,


  startDate: function(){

    var events = this.get('events').toArray();
    var smallestDate = new Date(events[0].get('start_time'));

    events.forEach(function(e){  

      var event_start_time =  e.get('start_time');

      if(smallestDate > event_start_time) {
        smallestDate = event_start_time;
      }
    });

    return moment(smallestDate).format('MMM Do');
  }.property('events.@each.start_time'),

  endDate: function(){

    var events = this.get('events').toArray();
    var greaterDate = new Date(events[0].get('start_time'));

    events.forEach(function(e){  

      var event_start_time =  new Date(e.get('start_time'));

      if(greaterDate < event_start_time) {
        greaterDate = event_start_time;
      }
    });

    return moment(greaterDate).format('MMM Do');
  }.property('events.@each.start_time'),

  spotsFilled: function() {
    return this.get('registrations.length');
  }.property('registrations.@each'),

  atCapacity: function() {
    var cap = this.get('capacity');
    var filled = this.get('spotsFilled');
    return cap <= filled;
  }.property('spotsFilled.@each', 'capacity.@each'),

});