// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'

// import './api/server'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

import store from './store.js';
console.log('Initaial state: ', store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('state after dispatch', store.getState());
});

store.dispatch({
  type: 'todos/todoAdded',
  payload: 'learning redux',
});
store.dispatch({
  type: 'todos/todoAdded',
  payload: 'practice kanban using redux',
});
store.dispatch({
  type: 'todos/todoToggled',
  payload: 1,
});

store.dispatch({
  type: 'todos/todoAdded',
  payload: 'Eat food on time',
});
store.dispatch({
  type: 'todos/todoAdded',
  payload: 'Speak to mohan',
});
store.dispatch({
  type: 'todos/todoDeleted',
  payload: 0,
});
store.dispatch({
  type: 'filters/statusFilterChanged',
  payload: 'All',
});
store.dispatch({
  type: 'todos/colorSelected',
  payload: {
    color: 'blue',
    todoId: 1,
  },
});
store.dispatch({
  type: 'filters/colorFilterChanged',
  payload: { color: 'red', changeType: 'added' },
});

unsubscribe();

store.dispatch({
  type: 'todos/todoAdded',
  payload: 'try creating a todo...',
});
