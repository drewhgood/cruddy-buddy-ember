import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {

  this.resource('clients', function(){
    // this.route('profile', { path: '/:client_id' }, function(){
      this.route('show', { path: '/:id' });
      this.route('lessons');
      this.route('invoices');
      this.route('calendar');
      this.route('account');
      this.route('edit');
    // });
    // this.route('new');
  });

  this.resource('admin', function() {
    this.route('employees', function(){
      this.route('new');
      this.route('show', { path: '/:id' });
      this.route('clients', { template: 'admin/clients' }, function() {
        this.route('new');
        this.route('show', { path: '/:id' });
      });
    });

    this.resource('categories', function() {
      this.route('new');
      this.route('show', { path: '/:id' });
    });
  });
});




    // this.resource('categories', function() {
    //   this.route('show');
    // });
