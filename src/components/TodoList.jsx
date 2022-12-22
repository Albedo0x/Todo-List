import React, { useContext, useState } from "react";
import { Context } from "../context.js";
import TodoItem from "./TodoItem";
import TodoHeader from "./TodoHeader.jsx";

function TodoList({ id, header, todos, desc, setTest, test }) {
  const [value, setValue] = useState("");

  function addItem(e) {
    if (e.keyCode === 13 && e.target.value !== "") {
      setTest(
        test.map((elem) => {
          if (elem.todoId === id) {
            elem.todos.push({
              id: Date.now() / 2,
              status: false,
              text: "added one",
            });
          }
          return elem;
        })
      );
      // setTest([
      //   ...test,
      //   {
      //     todoId: `${idOdTodo}-${Date.now()}`,
      //     todoName: `/${e.target.value}`,
      //     todoDescription: `This is ${e.target.value} to do`,
      //     todos: [
      //       {
      //         id: `${idOfTask}-e.target.value`,
      //         status: false,
      //         text: "like this8",
      //       },
      //     ],
      //   },
      // ]);
      // setValue("");
    }
  }

  return (
    <div className="TodoList">
      <TodoHeader key={id} desc={desc} header={header} />
      <div className="TodoBody">
        <input
          type="text"
          placeholder="Введи что собираешься делать"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyUp={addItem}
        />
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            status={todo.status}
            test={test}
            setTest={setTest}
            todos={todos}
            otherId={id}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
