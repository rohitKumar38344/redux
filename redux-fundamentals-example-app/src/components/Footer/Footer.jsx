import { RemainingTodos } from '../RemainingTodos/RemainingTodos';
import { ColorFilters } from '../ColorFilters/ColorFilters';
import { useSelector, useDispatch } from 'react-redux';
import { StatusFilter } from '../StatusFilter/StatusFilter';
import './footer.css';
export const Footer = () => {
  const { status, colors } = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const todosRemaining = useSelector((state) => {
    const uncompletedTodos = state.todos.filter((todo) => !todo.completed);
    return uncompletedTodos.length;
  });
  // All Active Completed

  function onStatusChange(status) {
    dispatch({ type: 'filters/statusFilterChanged', payload: status });
  }
  return (
    <footer className="footer">
      <div className="actions">
        <h5>Actions</h5>
        <button className="button">Mark All Completed</button>
        <button className="button">Clear Completed</button>
      </div>

      <RemainingTodos count={todosRemaining} />
      <StatusFilter value={status} onChange={onStatusChange} />
      {/* <ColorFilters value={colors} onChange={onColorChange} /> */}
    </footer>
  );
};
