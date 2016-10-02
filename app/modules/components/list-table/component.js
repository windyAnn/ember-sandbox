import Ember from 'ember';

export default Ember.Component.extend({
  currSelectUser: null,
  actions: {
    selectUser: function (user) {
      if (this.get('currSelectUser')) {
        return;
      }
      this.set('currSelectUser', user);
    },

  }
});
