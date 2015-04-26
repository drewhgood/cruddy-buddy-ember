import DS from 'ember-data';

// employee
export default DS.Model.extend({

  privilege: DS.belongsTo('privilege', {async: true}),
  courses: DS.hasMany('course', {async: true}),
  events: DS.hasMany('event', {async: true}),
  paycheques: DS.hasMany('paycheque', {async: true}),
  first_name: DS.attr(), 
  last_name: DS.attr(),
  email: DS.attr(),
  phone: DS.attr(),
  phone_alternate: DS.attr(),
  birthday: DS.attr(),
  gender: DS.attr(),
  a_unit: DS.attr(),
  a_postal: DS.attr(),
  a_number: DS.attr(),
  a_street: DS.attr(),
  a_city: DS.attr(),
  notes: DS.attr(),
  password_digest: DS.attr(),
  certification: DS.attr(),
  hourly_rate: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr(),

  
  fullName: function() {
    return this.get('first_name') + ' ' + this.get('last_name');
  }.property('first_name', 'last_name'),

  age: function(){
    var today = new Date();
    var birthday =  new Date(this.get('birthday'));
    var age = today.getFullYear() - birthday.getFullYear();
    var m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) 
    {
        age--;
    }
    return age;
  }.property('birthday'),

});
