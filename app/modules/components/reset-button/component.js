import Ember from 'ember';

export default Ember.Component.extend({
  currSelectUser: null,
  actions:{
    clearSelect: function () {
      this.set('currSelectUser', null);
    }
  }

});
