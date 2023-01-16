import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import TodoInfo from "./components/TodoInfo/TodoInfo";
import TaskList from "./components/TaskList/TaskList";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const store = useSelector((state) => state.toolkit);

  useEffect(() => {
    localStorage.setItem("test", JSON.stringify(store));
  }, [store]);

  return (
    <div className="App">
      <TodoInfo />
      <TaskList />
      <Routes>
        {store.map((todo, index) => (
          <Route
            key={todo.todoId}
            path={`/${todo.todoName}`}
            element={<TodoList todo={todo} index={index} />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
