import { useDispatch } from 'react-redux';
import { useState } from 'react';

export const Header = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleKeyDown(e) {
    const trimmedText = e.target.value.trim();
    if (e.key === 'Enter' && trimmedText) {
      dispatch({ type: 'todos/todoAdded', payload: trimmedText });
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
