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
      return state.filter((todo) => todo.todoId !== action.payload.taskId);
    },
    addItem(state, action) {
      state.map((elem) => {
        if (elem.todoId === action.payload.taskId) {
          elem.todos.push({
            id: Date.now() / 2,
            status: false,
            text: action.payload.value,
          });
        }
        return elem;
      });
    },
    deleteItem(state, action) {
      state.map((elem) => {
        if (elem.todoId === action.payload.todoId) {
          elem.todos.splice(
            elem.todos.findIndex((item) => item.id === action.payload.taskId),
            1
          );
        }
        return elem;
      });
    },
    checkItem(state, action) {
      state.map((elem) => {
        if (elem.todoId === action.payload.todoId) {
          elem.todos.map((todo, index) => {
            if (todo.id === action.payload.taskId) {
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
    },
    editHeader(state, action) {
      state.map((elem) => {
        if (elem.todoId === action.payload.todoId) {
          elem.todoName = action.payload.valueName;
        }
        return elem;
      });
    },
    editDescription(state, action) {
      state.map((elem) => {
        if (elem.todoId === action.payload.todoId) {
          elem.todoDescription = action.payload.valueDesc;
        }
        return elem;
      });
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
