function headerReducer(state, { type, payload }) {
  switch (type) {
    case "editHeader":
      return state.map((elem) => {
        if (elem.todoId === payload.todoId) {
          elem.todoName = payload.valueName;
        }
        return elem;
      });
    case "editDescription":
      return state.map((elem) => {
        if (elem.todoId === payload.todoId) {
          elem.todoDescription = payload.valueDesc;
        }
        return elem;
      });
    default:
      throw new Error(`Unknown action type: ${type}`);
  }
}

export default headerReducer;
