import DS from 'ember-data';

export default DS.Model.extend({

  total_revenue: DS.attr(),
  num_registrations: DS.attr(),
  capacity_ratio: DS.attr(),
  num_students: DS.attr(),
  chart1: DS.attr(),
  chart2: DS.attr(),
  last_registrations: DS.attr()

});
