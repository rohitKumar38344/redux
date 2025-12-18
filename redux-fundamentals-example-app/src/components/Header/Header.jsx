import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { saveNewTodo } from '../../features/todos/todosSlice';

export const Header = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleKeyDown(e) {
    const trimmedText = e.target.value.trim();
    if (e.key === 'Enter' && trimmedText) {
      dispatch(saveNewTodo(trimmedText));
      setText('');
    }
  }
  return (
    <input
      type="text"
      name="content"
      autoFocus={true}
      placeholder="What needs to be done?"
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};
