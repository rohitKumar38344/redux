const initialState = [
  {
    id: 0,
    text: 'learning react',
    completed: false,
  },
  {
    id: 1,
    text: 'write email to x',
    completed: true,
  },
  {
    id: 2,
    text: 'learning react',
    completed: false,
  },
  {
    id: 3,
    text: 'eat snacks',
    completed: false,
    color: 'green',
  },
  {
    id: 4,
    text: 'bring groceries',
    completed: true,
    color: 'orangered',
  },
];

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      return [
        ...state.todos,
        {
          id: nextTodoId(),
          text: action.payload,
          completed: false,
        },
      ];
    }

    case 'todos/todoToggled': {
      return state.todos.map((todo) => {
        if (todo.id === payload.id) {
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
      return state.todos.map(function (todo) {
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
      return state.todos.filter(function (todo) {
        if (todo.id !== action.payload.todoId) {
          return todo;
        }
      });
    }
    case 'todos/allCompleted': {
      return state.todos.filter(function (todo) {
        if (todo.completed) {
          return todo;
        }
      });
    }
    case 'todos/completedCleared': {
      return state.todos.filter(function (todo) {
        if (!todo.completed) {
          return todo;
        }
      });
    }
    default:
      return state;
  }
}
