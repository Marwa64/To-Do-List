
export const toggleEdit = () => {
    return {
      type: 'TOGGLE_EDIT'
    };
};

export const toggleMode = () => {
    return {
      type: 'TOGGLE_MODE'
    };
};

export const setTasks = (tasks) => {
  return {
    type: 'SET',
    tasks
  };
};

export const deleteTaskState = (id) => {
  return {
    type: 'DELETE',
    id
  };
};

export const deleteAllTasks = () => {
  return {
    type: 'DELETE_ALL'
  };
};
