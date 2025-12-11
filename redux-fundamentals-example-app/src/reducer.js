import { combineReducers } from 'redux';
import todosReducer from './features/todos/todosSlice.js';
import filtersReducer from './features/filters/filtersSlice.js';

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
});

export default rootReducer;
