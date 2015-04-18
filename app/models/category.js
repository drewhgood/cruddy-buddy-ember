import DS from 'ember-data';

// category
export default DS.Model.extend({
  
  title: DS.store('string'),
  description: DS.store('string'),

});
