function reducer(state, { type, payload }) {
  switch (type) {
    case "add":
      return [...state, { id: Date.now(), status: false, text: payload }];
    case "remove":
      return state.filter((todo) => todo.id !== payload);
    case "check":
      return state.map((todo) => {
        if (todo.id === payload) {
          todo.status = !todo.status;
        }
        return todo;
      });
    default:
      throw new Error(`Unknown action type: ${type}`);
  }
}

export default reducer;
