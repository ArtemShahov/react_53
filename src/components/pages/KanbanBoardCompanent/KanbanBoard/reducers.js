/* eslint-disable no-console */
import { IS_LOADING, SET_TASKS, TASK_MOVE, IS_VISIBLE } from './actionsTypes';
import dataService from '../../../../services/dataService';

const initialState = {
  data: {
    tasks: null,
    columns: {
      column_1: {
        id: 'column_1',
        title: 'To do',
        status: 'todo',
        tasksId: [],
      },
      column_2: {
        id: 'column_2',
        title: 'PR',
        status: 'pr',
        tasksId: [],
      },
      column_3: {
        id: 'column_3',
        title: 'In progress',
        status: 'progress',
        tasksId: [],
      },
      column_4: {
        id: 'column_4',
        title: 'Done',
        status: 'done',
        tasksId: [],
      },
    },
    columnOrder: ['column_1', 'column_2', 'column_3', 'column_4'],
  },
  isLoading: null,
  isVisible: false,
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
      dataService.updateTasks(state.data);
      return {
        ...state,
        data: newData,
      };
    }
    case IS_LOADING: {
      const { boolean } = action.payload;
      return {
        ...state,
        isLoading: boolean,
      };
    }
    case IS_VISIBLE: {
      const cur = state.isVisible;
      return {
        ...state,
        isVisible: !cur,
      };
    }
    default:
      return state;
  }
};
