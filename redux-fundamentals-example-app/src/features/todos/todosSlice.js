const initialState = [];

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ];
    }

    case 'todos/todoToggled': {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      });
    }
    case 'todos/colorSelected': {
      return state.map(function (todo) {
        if (todo.id !== action.payload.todoId) {
          return todo;
        }
        return {
          ...todo,
          color: action.payload.color,
        };
      });
    }
    case 'todos/todoDeleted': {
      return state.filter(function (todo) {
        if (todo.id !== action.payload) {
          return todo;
        }
      });
    }
    case 'todos/allCompleted': {
      return state.filter(function (todo) {
        if (todo.completed) {
          return todo;
        }
      });
    }
    case 'todos/completedCleared': {
      return state.filter(function (todo) {
        if (!todo.completed) {
          return todo;
        }
      });
    }
    default:
      return state;
  }
}
