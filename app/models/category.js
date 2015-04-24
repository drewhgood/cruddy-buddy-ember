import DS from 'ember-data';

export default DS.Model.extend({

  courses: DS.hasMany('course', {async: true}),
  title: DS.attr(), 
  description: DS.attr(),

  courseCount: function() {
    return this.get('courses').length;
  }.property('courses'),

});
