import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('legislators', function(){
    this.resource('contact', {path: 'contact/:zip'});
  });
  this.route('bills');
  this.resource('senate-bills', {path: 'bills/senate'});
  this.resource('house-bills', {path: 'bills/house'});
  this.route('committees');
  this.resource('senate-committees', {path: 'committees/senate'});
  this.resource('house-committees', {path: 'committees/house'});

});

export default Router;
