import todosReducer from '../features/todos/todosSlice';

test('should toggles a todo based on id', () => {
  const initialState = [
    {
      id: 0,
      text: 'read book',
      completed: false,
    },
  ];
  const action = { type: 'todos/todoToggled', payload: 0 };
  const result = todosReducer(initialState, action);
  expect(result[0].completed).toBe(true);
});
