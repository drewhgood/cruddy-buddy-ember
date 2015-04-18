import DS from 'ember-data';

// dependants (swimmers)
export default DS.Model.extend({
  
  client_id: DS.store('string'),
  first_name: DS.store('string'),
  last_name: DS.store('string'),
  birthday: DS.store('date'),
  gender: DS.store('string'),
  created_at: DS.store('date'),
  updated_at: DS.store('date'),
  notes: DS.store('string')
  
});
