import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
      publishPost: function() {
        var newPost = this.store.createRecord('post', {
          title: this.get('title'),
          category: this.get('category'),
          amount: this.get('amount'),
          timestamp: new Date().getTime()
        });
        newPost.save();
      }
    }
});
