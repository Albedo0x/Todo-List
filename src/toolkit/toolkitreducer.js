import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "tookit",
  initialState: JSON.parse(localStorage.getItem("test")),
  reducers: {
    addTodo(state, action) {
      state.push({
        todoId: `${action.payload.idOfTodo}-${Date.now()}`,
        todoName: `${action.payload.value}`,
        todoDescription: `This is ${action.payload.value} to do`,
        todos: [],
      });
    },
    removeTodo(state, action) {
      state.splice(action.payload.taskId, 1);
    },
    addItem(state, action) {
      state[action.payload.taskId].todos.push({
        id: Date.now() / 2,
        status: false,
        text: action.payload.value,
      });
    },
    deleteItem(state, action) {
      state[action.payload.todoId].todos.splice(action.payload.taskId, 1);
    },
    checkItem(state, action) {
      state.map((elem) => {
        if (elem.todoId === action.payload.todoId) {
          elem.todos.map((todo) => {
            if (todo.id === action.payload.taskId) {
              todo.status = !todo.status;
            }
            return todo;
          });
        }
        return elem;
      });
    },
    editHeader(state, action) {
      state[action.payload.todoId].todoName = action.payload.valueName;
    },
    editDescription(state, action) {
      state[action.payload.todoId].todoDescription = action.payload.valueDesc;
    },
  },
});

export default toolkitSlice.reducer;
export const {
  addTodo,
  removeTodo,
  addItem,
  deleteItem,
  checkItem,
  editHeader,
  editDescription,
} = toolkitSlice.actions;
