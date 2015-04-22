import DS from 'ember-data';

// USER
export default DS.Model.extend({
 
 client: DS.belongsTo('client'),
 employee: DS.belongsTo('employee'),
 first_name: DS.attr(), 
 last_name: DS.attr(),
 email: DS.attr(),
 phone: DS.attr(),
 phone_alternate: DS.attr(),
 birthday: DS.attr(),
 gender: DS.attr(),
 address: DS.attr(),
 notes: DS.attr(),
 user_type: DS.attr(),
 password_digest: DS.attr(),
 created_at: DS.attr(),      
 updated_at: DS.attr()
  
});