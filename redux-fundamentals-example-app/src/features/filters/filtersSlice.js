const initialState = {
  status: 'All',
  colors: [],
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
          colors: [...state.colors, action.payload.color],
        };
      } else {
        // color removed option chosen
        // remove the selector color from the colors array
        return {
          ...state,
          colors: state.colors.filter((c) => c !== action.payload.colorType),
        };
      }
    }
    default:
      return state;
  }
}
