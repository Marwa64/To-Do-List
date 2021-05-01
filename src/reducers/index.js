import { combineReducers } from 'redux';
import modeReducer from './modeReducer';
import tasksReducer from './tasksReducer';

const allReducers = combineReducers({
    darkMode: modeReducer,
    tasks: tasksReducer
})

export default allReducers;
