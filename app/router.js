import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  
  this.resource('clients');
  this.resource('client', { path: '/clients/:client_id'});

  this.resource('users');
  this.resource('user', { path: '/users/:user_id'});

  this.resource('dependants');
  this.resource('dependant', { path: '/dependants/:dependant_id'});

  this.resource('employees');
  this.resource('employee', { path: '/employees/:employee_id'});

  this.resource('courses');
  this.resource('course', { path: '/courses/:course_id'});
  
});
