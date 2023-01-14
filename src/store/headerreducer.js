const defaultState = JSON.parse(localStorage.getItem("test"));

function headerReduxReducer(state = defaultState, { type, payload }) {
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
      return state;
  }
}

export default headerReduxReducer;
