const defaultState = JSON.parse(localStorage.getItem("test"));

function todoReduxReducer(state = defaultState, { type, payload }) {
  switch (type) {
    case "deleteItem":
      return state.map((elem) => {
        if (elem.todoId === payload.todoId) {
          elem.todos.splice(
            elem.todos.findIndex((item) => item.id === payload.taskId),
            1
          );
        }
        return elem;
      });
    case "checkItem":
      return state.map((elem) => {
        if (elem.todoId === payload.todoId) {
          elem.todos.map((todo, index) => {
            if (todo.id === payload.taskId) {
              todo.status = !todo.status;
              elem.todos.splice(index, 1);
              if (todo.status) {
                elem.todos.push({
                  id: Date.now() / 2,
                  status: todo.status,
                  text: todo.text,
                });
              } else {
                elem.todos.unshift({
                  id: Date.now() / 2,
                  status: todo.status,
                  text: todo.text,
                });
              }
            }
            return todo;
          });
        }
        return elem;
      });
    case "addItem":
      return state.map((elem) => {
        if (elem.todoId === payload.taskId) {
          elem.todos.push({
            id: Date.now() / 2,
            status: false,
            text: payload.value,
          });
        }
        return elem;
      });
    default:
      return state;
  }
}

export default todoReduxReducer;
