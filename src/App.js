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

  const [test, setTest] = useState([]);

  // function addTodo(e) {
  //   if (e.keyCode === 13 && e.target.value !== "") {
  //     dispatch({
  //       type: "add",
  //       payload: value,
  //     });
  //     setValue("");
  //   }
  // }

  useEffect(() => {
    setTest(JSON.parse(localStorage.getItem("test")));
  }, []);

  useEffect(() => {
    localStorage.setItem("test", JSON.stringify(test));
  }, [test]);

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
      <TaskList test={test} setTest={setTest} />
      <Routes>
        {test.map((todo) => (
          <Route
            key={todo.todoId}
            path={todo.todoName}
            element={
              <TodoList
                desc={todo.todoDescription}
                todos={todo.todos}
                test={test}
                setTest={setTest}
                id={todo.todoId}
                header={todo.todoName}
              />
            }
          />
        ))}
      </Routes>
    </div>
    // </Context.Provider>
  );
}

export default App;
