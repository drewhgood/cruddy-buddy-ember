import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {

  this.resource('app', { path: '/' }, function() {
      this.route('landing', {path: '/home'});

      this.route('lessons', function(){
        this.route('show', {path:'/:id'});
      });

      this.route('client', function(){
        this.route('calendar'); 
        this.route('lessons', function() {
          this.route('show');
        });
        this.route('account');
        this.route('payments', function(){
          this.route('show', { path: '/:id' });
        });         
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
