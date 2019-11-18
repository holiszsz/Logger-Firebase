import Route from '@ember/routing/route';

export default Route.extend({
    model: function() {
        return this.store.findAll('post').then(results => results.sortBy('timestamp').reverse());
      }
});
