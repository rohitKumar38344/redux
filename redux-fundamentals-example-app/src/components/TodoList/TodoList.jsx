import { shallowEqual, useSelector } from 'react-redux';
import { TodoListItem } from '../TodoListItem/TodoListItem';

const selectTodosId = function (state, filter) {
  switch (filter) {
    case 'Active':
      return state.todos
        .filter((todo) => !todo.completed)
        .map((todo) => todo.id);
    case 'Completed':
      return state.todos
        .filter((todo) => todo.completed)
        .map((todo) => todo.id);
    default:
      return state.todos.map((todo) => todo.id);
  }
};

export const TodoList = () => {
  const filter = useSelector((state) => state.filters.status);
  const todosId = useSelector(
    (state) => selectTodosId(state, filter),
    shallowEqual,
  );

  const renderedListItems = todosId.map((todoId) => (
    <TodoListItem key={todoId} id={todoId} />
  ));
  return <ul>{renderedListItems}</ul>;
};
