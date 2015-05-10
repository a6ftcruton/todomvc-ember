Todos.TodosController = Ember.ArrayController.extend({
  actions: {
    createTodo: function() {
      // Get the title for the todo that is set in the "New Todo" input field
      var title = this.get('newTitle')  //newTitle is the name of the value attr on the input field
      console.log("this is " + this);
      if (!title.trim()) { return; }

      //Create the New Todo Model
      var todo = this.store.createRecord('todo', {
        title: title,
        isCompleted: false
      });

      //Clear the new todo input field
      this.set('newTitle', '');

      //Save the new model
      todo.save();
    } 
  },
  remaining: function() {
    return this.filterBy('isCompleted', false).get('length');
  }.property('@each.isCompleted'),

  inflection: function() {
    var remaining = this.get('remaining');
    return remaining === 1 ? "item" : "items";
  }.property('remaining')

});
