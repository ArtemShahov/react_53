/* eslint-disable no-console */
import { TASK_MOVE, SET_TASKS, IS_LOADING, IS_VISIBLE } from './actionsTypes';
import dataService from '../../../../services/dataService';

const setTasks = (data) => {
  console.log(data);
  return {
    type: SET_TASKS,
    payload: { data },
  };
};

const toggleModal = () => {
  return {
    type: IS_VISIBLE,
  };
};

const taskMove = (result) => {
  return {
    type: TASK_MOVE,
    payload: {
      result,
    },
  };
};

const setLoading = (boolean) => {
  return {
    type: IS_LOADING,
    payload: {
      boolean,
    },
  };
};

const loadTasks = () => (dispatch) => {
  dispatch(setLoading(true));
  dataService.getTasks().then((data) => {
    dispatch(setTasks(data));
    dispatch(setLoading(false));
  });
};

const changeTask = (result) => (dispatch) => {
  dispatch(taskMove(result));
};

const addTask = (newTask) => (dispatch) => {
  dataService.createTask(newTask).then(() => {
    console.log(newTask);
    dispatch(loadTasks());
  });
};

export default {
  taskMove,
  setTasks,
  loadTasks,
  changeTask,
  setLoading,
  toggleModal,
  addTask,
};
