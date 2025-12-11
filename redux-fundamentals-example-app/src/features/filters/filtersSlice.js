const initialState = {
  status: 'All',
  color: [],
};

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case 'filters/statusFilterChanged':
      return {
        ...state,
        status: action.payload,
      };
    case 'filters/colorFilterChanged': {
      if (action.payload.changeType === 'added') {
        //add the color to the color list
        return {
          ...state,
          color: [...state.color, action.payload.color],
        };
      } else {
        // color removed option chosen
        // remove the selector color from the colors array
        return {
          ...state,
          color: state.color.filter((c) => c !== action.payload.colorType),
        };
      }
    }
    default:
      return state;
  }
}
