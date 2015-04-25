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

  spotsFilled: function() {
    return this.get('registrations.length');
  }.property('registrations.@each'),

  atCapacity: function() {
    var cap = this.get('capacity');
    var filled = this.get('spotsFilled');
    return cap <= filled;
  }.property('spotsFilled.@each', 'capacity.@each'),
  
});