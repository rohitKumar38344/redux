import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const selectTodoById = (state, todoId) => {
  return state.todos.find((todo) => todo.id === todoId);
};
export const TodoListItem = ({ id }) => {
  const todo = useSelector((state) => selectTodoById(state, id));
  const { text, color, completed } = todo;
  const dispatch = useDispatch();
  function handleCompletedChanged() {
    dispatch({ type: 'todos/todoToggled', payload: todo.id });
  }
  return (
    <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <input
        type="checkbox"
        name="todo"
        id={`todo-${id}`}
        checked={completed}
        onChange={handleCompletedChanged}
      />
      <label
        htmlFor={`todo-${id}`}
        className={todo.completed ? 'deleted-item' : ''}
      >
        {text}
      </label>
    </li>
  );
};
