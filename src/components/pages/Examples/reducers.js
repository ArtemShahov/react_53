import SET_COUNT from './actionsTypes';

const initialData = {
  count: 0,
};

export const ExampleReducer = (state = initialData, action) => {
  switch (action.type) {
    case SET_COUNT: {
      const { increment } = action.payload;
      return {
        ...state,
        count: state.count + increment,
      };
    }
    default:
      return state;
  }
};
