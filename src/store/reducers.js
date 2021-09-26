import { combineReducers } from 'redux';
import { kanbanReducer } from '../components/KanbanBoardCompanent/KanbanBoard/reducers';
import { ExampleReducer } from '../components/Examples/reducers';

export default combineReducers({ kanbanReducer, ExampleReducer });
