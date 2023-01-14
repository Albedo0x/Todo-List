const defaultState = JSON.parse(localStorage.getItem("test"));

const addTodo = "addTodo";
const removeTodo = "removeTodo";
const deleteItem = "deleteItem";
const checkItem = "checkItem";
const addItem = "addItem";
const editHeader = "editHeader";
const editDescription = "editDescription";

function taskReduxReducer(state = defaultState, { type, payload }) {
  switch (type) {
    case addTodo:
      return [
        ...state,
        {
          todoId: `${payload.idOfTodo}-${Date.now()}`,
          todoName: `${payload.value}`,
          todoDescription: `This is ${payload.value} to do`,
          todos: [],
        },
      ];
    case removeTodo:
      return state.filter((todo) => todo.todoId !== payload.taskId);

    case deleteItem:
      return state.map((elem) => {
        if (elem.todoId === payload.todoId) {
          elem.todos.splice(
            elem.todos.findIndex((item) => item.id === payload.taskId),
            1
          );
        }
        return elem;
      });
    case checkItem:
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
    case addItem:
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
    case editHeader:
      return state.map((elem) => {
        if (elem.todoId === payload.todoId) {
          elem.todoName = payload.valueName;
        }
        return elem;
      });
    case editDescription:
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

export default taskReduxReducer;

export const addTodoAction = (payload) => ({ type: addTodo, payload });
export const removeTodoAction = (payload) => ({ type: removeTodo, payload });
export const deleteItemAction = (payload) => ({ type: deleteItem, payload });
export const checkItemAction = (payload) => ({ type: checkItem, payload });
export const addItemAction = (payload) => ({ type: addItem, payload });
export const editHeaderAction = (payload) => ({ type: editHeader, payload });
export const editDesctiptionAction = (payload) => ({
  type: editDescription,
  payload,
});
