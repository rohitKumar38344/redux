import { RemainingTodos } from '../RemainingTodos/RemainingTodos';
import { ColorFilters } from '../ColorFilters/ColorFilters';
import { useSelector, useDispatch } from 'react-redux';
import { StatusFilter } from '../StatusFilter/StatusFilter';
import './footer.css';
import {
  colorFilterChanged,
  statusFilterChanged,
} from '../../features/filters/filtersSlice';

export const Footer = () => {
  const { status, colors } = useSelector((state) => state.filters);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const todosRemaining = useSelector((state) => {
    const uncompletedTodos = state.todos.filter((todo) => !todo.completed);
    return uncompletedTodos.length;
  });

  function onColorChange(color, changeType) {
    dispatch(colorFilterChanged(color, changeType));
  }

  function onStatusChange(status) {
    // const nextTodos = todos.filter((todo) => todo.completed === status);
    // console.log('footer todos:', todos);
    dispatch(statusFilterChanged(status));
    // dispatch({ type: 'todos/todosLoaded', payload: nextTodos });
  }

  function onMarkCompletedClick() {
    dispatch({ type: 'todos/allCompleted' });
  }

  function onClearCompletedClick() {
    dispatch({ type: 'todos/completedCleared' });
  }
  return (
    <footer className="footer">
      <div className="actions">
        <h5>Actions</h5>
        <button className="button" onClick={onMarkCompletedClick}>
          Mark All Completed
        </button>
        <button className="button" onClick={onClearCompletedClick}>
          Clear Completed
        </button>
      </div>

      <RemainingTodos count={todosRemaining} />
      <StatusFilter value={status} onChange={onStatusChange} />
      <ColorFilters value={colors} onChange={onColorChange} />
    </footer>
  );
};
