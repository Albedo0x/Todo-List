import React, { useEffect, useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import TodoInfo from "./components/TodoInfo/TodoInfo";
import TaskList from "./components/TaskList/TaskList";
import TodoList from "./components/TodoList/TodoList";
import { Context } from "./context/context.js";
import reducer from "./utilities/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducerRedux from "./utilities/reducerRedux";

const store = createStore(reducerRedux);

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("test"))
  );

  useEffect(() => {
    localStorage.setItem("test", JSON.stringify(state));
  }, [state]);

  return (
    <Provider store={store}>
      <Context.Provider
        value={{
          state,
          dispatch,
        }}
      >
        <div className="App">
          <TodoInfo />
          <TaskList />
          <Routes>
            {state.map((todo) => (
              <Route
                key={todo.todoId}
                path={`/${todo.todoName}`}
                element={<TodoList todo={todo} />}
              />
            ))}
          </Routes>
        </div>
      </Context.Provider>
    </Provider>
  );
}

export default App;
