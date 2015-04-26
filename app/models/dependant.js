import DS from 'ember-data';

// dependants (swimmers)
export default DS.Model.extend({

  client: DS.belongsTo('client', {async: true}),
  registrations: DS.hasMany('registration', {async: true}),
  first_name: DS.attr(),
  last_name: DS.attr(),
  birthday: DS.attr(),
  gender: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr(),
  notes: DS.attr(),
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
  }.property('birthday.@each')

});


