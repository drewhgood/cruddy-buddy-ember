import DS from 'ember-data';


export default DS.Model.extend({
  registration: DS.belongsTo('registration', {async: true}),
  date: DS.attr(), 
  total: DS.attr()

});


