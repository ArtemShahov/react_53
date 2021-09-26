import SET_COUNT from './actionsTypes';

const setCount = (increment) => {
  return {
    type: SET_COUNT,
    payload: { increment },
  };
};

export default { setCount };
