const getTasks = (store) => store.kanbanReducer.data;
const getIsLoading = (store) => store.kanbanReducer.isLoading;

export default {
  getTasks,
  getIsLoading,
};
