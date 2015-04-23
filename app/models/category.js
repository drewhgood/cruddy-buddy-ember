import DS from 'ember-data';

export default DS.Model.extend({

  courses: DS.hasMany('course'),
  title: DS.attr(), 
  description: DS.attr(),

});
