import { client } from '../../api/client.js';
const initialState = [];

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todosLoaded': {
      return action.payload;
    }
    case 'todos/todoAdded': {
      return [...state, action.payload];
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
      return state.filter((todo) => todo.id !== action.payload);
    }
    case 'todos/allCompleted': {
      console.log('all completed clicked');
      return state.filter((todo) => todo.completed);
    }
    case 'todos/completedCleared': {
      return state.filter((todo) => !todo.completed);
    }
    default:
      return state;
  }
}

export function fetchTodos() {
  return async function fetchTodosThunk(dispatch, getState) {
    const response = await client.get('/fakeApi/todos');
    dispatch(todosLoaded(response.todos));
  };
}

export const todosLoaded = (todos) => {
  return { type: 'todos/todosLoaded', payload: todos };
};

export function saveNewTodo(text) {
  // thunk action creator
  return async function saveNewTodoThunk(dispatch, getState) {
    const initialTodo = { text };
    const response = await client.post('/fakeApi/todos', { todo: initialTodo });
    dispatch(todoAdded(response.todo));
  };
}

export const todoAdded = (todo) => {
  return { type: 'todos/todoAdded', payload: todo };
};
