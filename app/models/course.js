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
  description: DS.attr('string'),
  created_at: DS.attr(),
  updated_at: DS.attr(),
  inCart: false,
  num_students: DS.attr(),
  is_full: DS.attr('boolean'),
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),

  displayStartDate: function(){

    var date = this.get('startDate')

    return moment(date).format('MMM Do');
  }.property('startDate'),

  displayEndDate: function(){

    var date = this.get('endDate')

    return moment(date).format('MMM Do');
  }.property('endtDate'),

  spotsFilled: function() {
    return this.get('registrations.length');
  }.property('registrations.@each'),

  atCapacity: function() {
    var cap = this.get('capacity');
    var filled = this.get('spotsFilled');
    return cap <= filled;
  }.property('spotsFilled.@each', 'capacity.@each'),

});