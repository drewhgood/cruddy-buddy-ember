import DS from 'ember-data';

// dependants (swimmers)
export default DS.Model.extend({

  client: DS.belongsTo('client'),
  first_name: DS.attr(),
  last_name: DS.attr(),
  birthday: DS.attr(),
  gender: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr(),
  notes: DS.attr()
  
});
