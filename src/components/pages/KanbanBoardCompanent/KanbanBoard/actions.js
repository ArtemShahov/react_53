/* eslint-disable no-console */
import {
  TASK_MOVE,
  SET_TASKS,
  IS_LOADING,
  IS_VISIBLE,
  SET_INPUT,
} from './actionsTypes';
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

const setInput = (field, value) => {
  return {
    type: SET_INPUT,
    payload: {
      field,
      value,
    },
  };
};

const loadTasks = () => (dispatch) => {
  console.log('load');
  dispatch(setLoading(true));
  dataService.getTasks().then((data) => {
    dispatch(setTasks(data));
    dispatch(setLoading(false));
  });
};

const changeTask = (result) => (dispatch) => {
  dataService.updateTasks(result);
  dispatch(taskMove(result));
  dispatch(loadTasks());
};

const addTask = (newTask) => (dispatch) => {
  dataService.createTask(newTask).then(() => {
    dispatch(loadTasks());
  });
};

const changeInput = (field, value) => (dispatch) => {
  dispatch(setInput(field, value));
};

export default {
  taskMove,
  setTasks,
  loadTasks,
  changeTask,
  setLoading,
  toggleModal,
  addTask,
  changeInput,
};
