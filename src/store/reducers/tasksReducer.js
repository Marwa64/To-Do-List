import {
  SET_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  DELETE_ALL,
  TOGGLE_EDIT,
} from "../actions/types";

const tasksReducer = (state = [], action) => {
  switch(action.type) {
    case SET_TASK:
      return [
              ...state,
              {
                id: action.task.id,
                name: action.task.name,
                edit: action.edit
              }
            ]
    case UPDATE_TASK:
      return state.map(task => task.id === action.id ? {...task, name: action.name} : task)
    case DELETE_TASK:
      return state.filter(task => task.id !== action.id)
    case DELETE_ALL:
      return []
    case TOGGLE_EDIT:
      return state.map(task => task.id === action.id ? {...task, edit: !task.edit} : task)
    default:
      return state
  }
}

export default tasksReducer;
