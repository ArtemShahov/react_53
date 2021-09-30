/* eslint-disable no-console */
import {
  TASK_MOVE,
  SET_TASKS,
  IS_LOADING,
  IS_VISIBLE,
  SET_INPUT,
  DEL_TASK,
} from './actionsTypes';
import dataService from '../../../../services/dataService';

const setTasks = (data) => {
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

const delTask = (id, columnId) => {
  return {
    type: DEL_TASK,
    payload: {
      id,
      columnId,
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
  // console.log(result);
  dataService.updateTasks(result);
  dispatch(loadTasks());
};

const addTask = (newTask) => (dispatch) => {
  dataService.createTask(newTask).then(() => {
    dispatch(loadTasks());
  });
};

const deleteTask = (id, columnId) => (dispatch) => {
  dataService.delTask({ id, columnId });
  console.log({ id, columnId });
  dispatch(delTask(id, columnId));
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
  deleteTask,
};
