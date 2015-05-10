Todos.Todo = DS.Model.extend({ 
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
  {
    id: 1,
    title: "learn ye the embers",
    isCompleted: false
  },
  {
    id: 2,
    title: "darlin' go and cut your hair",
    isCompleted: false
  },
  {
    id: 3,
    title: "Wail upon thy pecs",
    isCompleted: true
  }
]
