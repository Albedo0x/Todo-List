import React, { useState, useEffect, useReducer } from "react";
import TodoInput from "./components/TodoInput";
import { Route, Routes } from "react-router-dom";
import TodoList from "./components/TodoList";
import TaskList from "./components/TaskList";
import { Context } from "./context.js";
import reducer from "./reducer";
import { Form } from "react-router-dom";

function App() {
  // const [state, dispatch] = useReducer(
  //   reducer,
  //   JSON.parse(localStorage.getItem("todos"))
  // );
  // const [value, setValue] = useState("");

  const test = [
    {
      todoId: 1,
      todoName: "first",
      todoDescription: "this if the first To Do",
      todos: [
        { id: 1, status: false, text: "like this" },
        { id: 2, status: false, text: "like that" },
      ],
    },
    {
      todoId: 2,
      todoName: "second",
      todoDescription: "this if the second To Do",
      todos: [
        { id: 1, status: false, text: "like this" },
        { id: 2, status: false, text: "like that" },
      ],
    },
    {
      todoId: 3,
      todoName: "third",
      todoDescription: "this if the third To Do",
      todos: [
        { id: 1, status: false, text: "like this" },
        { id: 2, status: false, text: "like that" },
      ],
    },
  ];

  // function addTodo(e) {
  //   if (e.keyCode === 13 && e.target.value !== "") {
  //     dispatch({
  //       type: "add",
  //       payload: value,
  //     });
  //     setValue("");
  //   }
  // }

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(state));
  // }, [state]);

  return (
    // <Context.Provider
    //   value={
    //     {
    //       dispatch,
    //       state,
    //       value,
    //       setValue,
    //       addTodo,
    //     }
    //   }
    // >
    <div className="App">
      <TodoInput />
      <TaskList test={test} />
      <TodoList test={test} />
    </div>
    // </Context.Provider>
  );
}

export default App;
