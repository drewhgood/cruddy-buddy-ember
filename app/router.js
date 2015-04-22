import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('users', function() {
    this.route('show', { path: '/:user_id' });
    this.route('edit', { path: '/:user_id/edit' });
    this.route('new');
  });

  this.resource('admin', function() {

    this.resource('employees', function(){
      this.route('new');
      this.route('show', { path: '/:id' });
    });

    this.resource('clients', function() {
      this.route('new');
      this.route('show', { path: '/:id' });
    });
  });
});




    // this.resource('categories', function() {
    //   this.route('show');
    // });
