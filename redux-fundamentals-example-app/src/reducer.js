const initialState = {
  todos: [
    {
      id: 0,
      text: 'learning react',
      completed: false,
    },
    {
      id: 1,
      text: 'write email to x',
      completed: true,
    },
    {
      id: 2,
      text: 'learning react',
      completed: false,
    },
    {
      id: 3,
      text: 'eat snacks',
      completed: false,
      color: 'green',
    },
    {
      id: 4,
      text: 'bring groceries',
      completed: true,
      color: 'orangered',
    },
  ],
  filters: {
    status: 'All',
    color: [],
  },
};

export default function appReducer(state = initialState, action) {
  switch (key) {
    case value:
      break;

    default:
      return state;
  }
}
