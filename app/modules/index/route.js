import Ember from 'ember';
import inject from 'ember-service/inject';

export default Ember.Route.extend({
  ajax:inject(),

  model(){
    return this.get('ajax').request('https://api.github.com/users');
  }
});
