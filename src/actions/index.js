
export const toggleEdit = (id) => {
    return {
      type: 'TOGGLE_EDIT',
      id
    };
};

export const toggleMode = () => {
    return {
      type: 'TOGGLE_MODE'
    };
};

export const addTask = (task, edit) => {
  return {
    type: 'ADD',
    task,
    edit
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
