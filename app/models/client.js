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
  created_at: DS.attr(),
  updated_at: DS.attr(),
  dependants_name: DS.attr(),

  fullName: function() {
    return this.get('first_name') + ' ' + this.get('last_name');
  }.property('first_name', 'last_name'),

  registrationCount: function() {
    return this.get('registrations.length');
  }.property('registrations.@each'),

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

  }.property('birthday.@each'),

  dependants_name_display: function(){
    var d_names = this.get('dependants_name');
        
        if(d_names){
          return d_names.substring(0, d_names.length - 1);
        }else{
          ""
        }

    return 

  }.property('dependants_name')
  
});



