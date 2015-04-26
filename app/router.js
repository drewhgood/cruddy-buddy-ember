import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {

  this.resource('client', { path: '/' }, function() {
      this.route('show', function(){
        this.route('calendar'); 
        this.route('lessons');
        this.route('account');
        this.route('payments');         
      });
  });



  this.resource('admin', function() {
     
    this.route('employees', function(){
      this.route('new');
      this.route('show', { path: '/:id' });
    });

    this.route('courses', function(){
      this.route('new');
      this.route('show', { path: '/:id' });
    });

    this.route('clients', function() {
      this.route('new');
      this.route('show', { path: '/:id' });
    });

    this.route('dependants', function() {
      this.route('new');
      this.route('show', { path: '/:id' });
    });

    this.route('payments', function() {
      this.route('new');
      this.route('show', { path: '/:id' });
    });

    this.route('categories', function() {
      this.route('new');
      this.route('show', { path: '/:id' }, function(){
        
      });
    });
  });
});
