function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), status: false, text: action.payload },
      ];
    case "remove":
      return state.filter((todo) => todo.id !== action.payload);
    case "check":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          todo.status = !todo.status;
        }
        return todo;
      });
    default:
      return state;
  }
}

export default reducer;
