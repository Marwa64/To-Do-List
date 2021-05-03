import { combineReducers } from 'redux';
import modeReducer from './modeReducer';
import tasksReducer from './tasksReducer';
import editReducer from './editReducer';

const allReducers = combineReducers({
    darkMode: modeReducer,
    tasks: tasksReducer,
    edit: editReducer
})

export default allReducers;
