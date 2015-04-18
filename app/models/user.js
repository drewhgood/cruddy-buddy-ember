import DS from 'ember-data';

// USER
export default DS.Model.extend({

 first_name: DS.attr('string'), 
 last_name: DS.attr('string'),
 email: DS.attr('string'),
 phone: DS.attr('string'),
 phone_alternate: DS.attr('string'),
 birthday: DS.attr('date'),
 gender: DS.attr('string'),
 address: DS.attr('string'),
 notes: DS.attr('string'),
 user_type: DS.attr('string'),
 password_digest: DS.attr('string'),
 created_at: DS.attr('date'),      
 updated_at: DS.attr('date'),
  
});