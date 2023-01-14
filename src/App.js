import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import TodoInfo from "./components/TodoInfo/TodoInfo";
import TaskList from "./components/TaskList/TaskList";
import TodoList from "./components/TodoList/TodoList";
import { useSelector } from "react-redux";

function App() {
  const storeState = useSelector((state) => state.task);

  // const [state, dispatch] = useReducer(
  //   reducer,
  //   JSON.parse(localStorage.getItem("test"))
  // );

  // useEffect(() => {
  //   localStorage.setItem("test", JSON.stringify(state));
  // }, [state]);

  useEffect(() => {
    localStorage.setItem("test", JSON.stringify(storeState));
  }, [storeState]);

  return (
    <div className="App">
      <TodoInfo />
      <TaskList />
      <Routes>
        {storeState.map((todo) => (
          <Route
            key={todo.todoId}
            path={`/${todo.todoName}`}
            element={<TodoList todo={todo} />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
