import React, { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { Context } from "./context.js";

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  function addTodo(e) {
    if (e.keyCode === 13) {
      setTodos([...todos, { id: Date.now(), status: false, text: value }]);
      setValue("");
    }
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function setChecked(status, id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.status = !status;
        }
        return todo;
      })
    );
  }

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    setTodos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Context.Provider
      value={{
        deleteTodo,
        setChecked,
        todos,
        value,
        setValue,
        addTodo,
      }}
    >
      <div className="App">
        <TodoInput />
        <TodoList />
      </div>
    </Context.Provider>
  );
}

export default App;
