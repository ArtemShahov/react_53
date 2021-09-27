import { combineReducers } from 'redux';
import { kanbanReducer } from '../components/pages/KanbanBoardCompanent/KanbanBoard/reducers';
import { ExampleReducer } from '../components/pages/Examples/reducers';

export default combineReducers({ kanbanReducer, ExampleReducer });
