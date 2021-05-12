import axios from 'axios';
import {
  TOGGLE_EDIT,
  TOGGLE_MODE,
  SET_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  DELETE_ALL,
  DISPLAY_ERROR,
  REMOVE_ERROR
} from './types';

export const toggleEdit = (id) => {
    return {
      type: TOGGLE_EDIT,
      id
    };
};

export const toggleMode = () => {
    return {
      type: TOGGLE_MODE
    };
};

export const setTasks = () => async dispatch => {
  axios.get('http://localhost:5000/tasks/')
  .then(res => {
      removeError();
      res.data.map(task => dispatch({
         type: SET_TASK,
         task: task,
         edit: false
       })
     )}
   )
  .catch(err => displayError(err.message))
};

export const updateTask = (id, taskName) => async dispatch => {
  axios.put(`http://localhost:5000/tasks/${id}`, {name: taskName})
  .then(() => {
    removeError()
    dispatch({
       type: UPDATE_TASK,
       id,
       name: taskName
     })
  })
  .catch(err => displayError(err.message))
};

export const deleteTaskState = (id) => async dispatch => {
  axios.delete(`http://localhost:5000/tasks/${id}`)
    .then(() => res => {
        removeError();
        dispatch({
           type: DELETE_TASK,
           id
         })
       })
    .catch(err => displayError(err.message));
};

export const deleteAllTasks = (ids) => async dispatch => {
  axios.delete(`http://localhost:5000/tasks/${ids}`)
    .then(() => {
      removeError()
      dispatch({
        type: DELETE_ALL
       })
    })
    .catch(err => displayError(err.message));
};

export const displayError = (message) => {
  return {
    type: DISPLAY_ERROR,
    message
  }
}

export const removeError = () => {
  return {
    type: REMOVE_ERROR
  }
}
