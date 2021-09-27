const getTasks = (store) => store.kanbanReducer.data;
const getIsLoading = (store) => store.kanbanReducer.isLoading;

const checkVisible = (store) => store.kanbanReducer.isVisible;

export default {
  getTasks,
  getIsLoading,
  checkVisible,
};
