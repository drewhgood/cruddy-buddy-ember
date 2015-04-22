import DS from 'ember-data';

export default DS.Model.extend({
  
  certification: DS.attr(),
  hourly_rate: DS.attr(),
  privelege_id: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr()
});
