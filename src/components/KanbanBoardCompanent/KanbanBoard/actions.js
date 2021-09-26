/* eslint-disable no-console */
import { TASK_MOVE, SET_TASKS } from './actionsTypes';
import dataService from '../../../services/dataService';

const setTasks = (data) => {
  console.log(data);
  return {
    type: SET_TASKS,
    payload: { data },
  };
};

function taskMove(result) {
  return {
    type: TASK_MOVE,
    payload: {
      result,
    },
  };
}

const loadTasks = () => (dispatch) => {
  dataService.getTasks().then((data) => dispatch(setTasks(data)));
};

const changeTask = (result) => (dispatch) => {
  dispatch(taskMove(result));
};

export default { taskMove, setTasks, loadTasks, changeTask };
