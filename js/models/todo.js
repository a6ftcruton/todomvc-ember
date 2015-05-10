Todos.Todo = Ember.Model.extend({ 
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});
