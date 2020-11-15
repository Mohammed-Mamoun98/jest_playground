export const addTodo = (value, state) => {
  state = {
    ...state,
    todos: state.todos.push({ text: value }),
  };
};

export let initState = {
  todos: [],
  addTodo: () => {
    alert("origin");
  },
  stateEdit: () => {},
  deleteTodo: () => {},
};
