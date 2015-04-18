import DS from 'ember-data';

// employee
export default DS.Model.extend({

  employee_id: DS.store('string'),
  course_id: DS.store('string'),
  start_time: DS.store(),
  duration: DS.store()
  
});
