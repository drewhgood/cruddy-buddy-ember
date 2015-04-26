import DS from 'ember-data';


export default DS.Model.extend({
  registration: DS.belongsTo('registration', {async: true}),
  date: DS.attr('date'), 
  total: DS.attr('number'),
  created_at: DS.attr('date'),
  updated_at: DS.attr(),

  invoice_date: function(){
    var invoice_date = new Date(this.get('date'));

    return moment(invoice_date).format('Do MMM YYYY');
  }.property('date'),

  tax: function(){
    var total = this.get('total');
    return  (total * 0.05).toFixed(2);

  }.property('total'),

  subTotal: function(){
    var total = this.get('total');
    return  (total * 0.95).toFixed(2);

  }.property('total')

});


