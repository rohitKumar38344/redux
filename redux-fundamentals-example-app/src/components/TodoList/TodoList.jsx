import { shallowEqual, useSelector } from 'react-redux';
import { TodoListItem } from '../TodoListItem/TodoListItem';

const selectTodosId = function (state) {
  return state.todos.map((todo) => todo.id);
};

export const TodoList = () => {
  const todosId = useSelector(selectTodosId, shallowEqual);

  const renderedListItems = todosId.map((todoId) => (
    <TodoListItem key={todoId} id={todoId} />
  ));
  return <ul>{renderedListItems}</ul>;
};
