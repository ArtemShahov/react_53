/* eslint-disable no-console */
import { SET_TASKS, TASK_MOVE } from './actionsTypes';

const initialState = {
  data: {},
};

export const kanbanReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS: {
      const { data } = action.payload;
      return {
        ...state,
        data,
      };
    }
    case TASK_MOVE: {
      console.log({ ...state });
      const newData = { ...state.data };
      const { draggableId, source, destination } = action.payload.result;
      // console.log(source, destination, state.data);
      const sourceArray = newData.columns[source.droppableId].tasksId;
      const destinationArray = newData.columns[destination.droppableId].tasksId;
      sourceArray.splice(source.index, 1);
      destinationArray.splice(destination.index, 0, draggableId);
      return {
        ...state,
        data: newData,
      };
    }
    default:
      return state;
  }
};
