import React, { useState, useEffect, useReducer } from "react";
import TodoInfo from "./components/TodoInfo";
import { Route, Routes } from "react-router-dom";
import TodoList from "./components/TodoList";
import TaskList from "./components/TaskList";
import { Context } from "./context.js";
import reducer from "./reducer";

function App() {
  // const [state, dispatch] = useReducer(
  //   reducer,
  //   JSON.parse(localStorage.getItem("test"))
  // );

  // function addTodo(e) {
  //   if (e.keyCode === 13 && e.target.value !== "") {
  //     dispatch({
  //       type: "add",
  //       payload: value,
  //     });
  //     setValue("");
  //   }
  // }

  const [test, setTest] = useState([]);

  useEffect(() => {
    setTest(JSON.parse(localStorage.getItem("test")));
  }, []);

  useEffect(() => {
    localStorage.setItem("test", JSON.stringify(test));
  }, [test]);

  return (
    <Context.Provider
      value={{
        test,
        setTest,
      }}
    >
      <div className="App">
        <TodoInfo />
        <TaskList />
        <Routes>
          {test.map((todo) => (
            <Route
              key={todo.todoId}
              path={todo.todoName}
              element={<TodoList todo={todo} />}
            />
          ))}
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
