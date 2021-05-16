import { combineReducers } from 'redux';
import modeReducer from './modeReducer';
import tasksReducer from './tasksReducer';
import errorReducer from './errorReducer';

const allReducers = combineReducers({
    darkMode: modeReducer,
    tasks: tasksReducer,
    error: errorReducer
})

export default allReducers;
