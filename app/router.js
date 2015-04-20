import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('users', function() {
    this.resource('user', { path: '/:user_id' });
    this.route('new');
    this.route('/user_id/edit');
  });
});
