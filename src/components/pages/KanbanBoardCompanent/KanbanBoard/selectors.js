const getTasks = (store) => store.kanbanReducer.data;
const getIsLoading = (store) => store.kanbanReducer.isLoading;
const checkVisible = (store) => store.kanbanReducer.isVisible;
const getTaskContent = (store) => store.kanbanReducer.taskForm.content;
const getTaskTitle = (store) => store.kanbanReducer.taskForm.title;
const getTaskAssign = (store) => store.kanbanReducer.taskForm.assign;
const getTaskStatus = (store) => store.kanbanReducer.taskForm.status;

export default {
  getTasks,
  getIsLoading,
  checkVisible,
  getTaskTitle,
  getTaskContent,
  getTaskAssign,
  getTaskStatus,
};
