import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource("clients", function() {
       this.resource("client");
   });

  this.resource('users', function() {
    this.resource('user');
  });

  this.resource('dependants', { path: '/swimmers' }, function() {
    this.resource('dependant', { path: '/swimmer/:id' });
  });

  this.resource('employees', function() {
    this.resource('employee', function() {});
  });

  this.resource('courses',{ path: '/classes' }, function() {
    this.resource('course',{ path: '/class' }, function() {});
  });
});
