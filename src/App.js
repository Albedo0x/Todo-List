import React, { useState, useEffect, useReducer } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TaskList from "./components/TaskList";
import { Context } from "./context.js";
import reducer from "./reducer";

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("todos"))
  );
  const [value, setValue] = useState("");

  function addTodo(e) {
    if (e.keyCode === 13 && e.target.value !== "") {
      dispatch({
        type: "add",
        payload: value,
      });
      setValue("");
    }
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider
      value={{
        dispatch,
        state,
        value,
        setValue,
        addTodo,
      }}
    >
      <div className="App">
        <TodoInput />
        <TaskList />
        <TodoList />
      </div>
    </Context.Provider>
  );
}

export default App;
