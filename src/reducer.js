function reducer(state, { type, payload }) {
  switch (type) {
    // case "add":
    //   return [...state, { id: Date.now(), status: false, text: payload }];
    // case "remove":
    //   return state.filter((todo) => todo.id !== payload);
    // case "check":
    //   return state.map((todo) => {
    //     if (todo.id === payload) {
    //       todo.status = !todo.status;
    //     }
    //     return todo;
    //   });
    case "deleteItem":
      return state.map((elem) => {
        if (elem.todoId === payload.otherId) {
          elem.todos.splice(
            elem.todos.findIndex((item) => item.id === payload.id),
            1
          );
        }
        return elem;
      });
    case "checkItem":
      return state.map((elem) => {
        if (elem.todoId === payload.otherId) {
          elem.todos.map((todo) => {
            if (todo.id === payload.id) {
              todo.status = !todo.status;
            }
            return todo;
          });
        }
        return elem;
      });
    default:
      throw new Error(`Unknown action type: ${type}`);
  }
}

export default reducer;
