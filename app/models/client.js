import DS from 'ember-data';

export default DS.Model.extend({
  
  dependants: DS.hasMany('dependant', {async: true}),
  registrations: DS.hasMany('registration', {async: true}),
  payments: DS.hasMany('payment', {async: true}),
  courses: DS.hasMany('course', {async: true}),
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
  
  fullName: function() {
    return this.get('first_name') + ' ' + this.get('last_name');
  }.property('first_name', 'last_name')
});



