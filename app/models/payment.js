import DS from 'ember-data';


export default DS.Model.extend({
  registration: DS.belongsTo('registration', {async: true}),
  date: DS.attr(), 
  total: DS.attr('number'),
  created_at: DS.attr('date'),
  updated_at: DS.attr(),

  invoice_date: function(){
    var invoice_date = new Date(this.get('created_at'));

    return moment(invoice_date).format('Do MMM YYYY');
  }.property('created_at'),

  tax: function(){
    var total = this.get('total');
    return  total * 0.05;

  }.property('total'),

  subTotal: function(){
    var total = this.get('total');
    return  total * 0.95;

  }.property('total')

});


