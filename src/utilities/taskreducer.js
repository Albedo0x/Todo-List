function taskReducer(state, { type, payload }) {
  switch (type) {
    case "addTodo":
      return [
        ...state,
        {
          todoId: `${payload.idOfTodo}-${Date.now()}`,
          todoName: `${payload.value}`,
          todoDescription: `This is ${payload.value} to do`,
          todos: [
            {
              id: `${payload.idOfTodo}-${payload.value}`,
              status: false,
              text: "Add tasks here",
            },
          ],
        },
      ];
    case "removeTodo":
      return state.filter((todo) => todo.todoId !== payload.taskId);
    default:
      throw new Error(`Unknown action type: ${type}`);
  }
}

export default taskReducer;
