const initialState = {
  todos: [
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
  ],
  filters: {
    status: 'All',
    color: [],
  },
};

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded':
      return {
        ...state,

        todos: [
          ...state.todos,
          {
            id: nextTodoId(),
            text: action.payload,
            completed: false,
          },
        ],
      };
    case 'todos/todoToggled':
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === payload.id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          } else {
            return todo;
          }
        }),
      };
    case 'filters/statusFilterChanged':
      return {
        ...state,
        todos: [...state.todos],
        filters: {
          ...state.filters,
          filters: action.payload,
        },
      };
    default:
      return state;
  }
}
