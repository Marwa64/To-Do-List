
const tasksReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET':
      return action.tasks
    case 'DELETE':
      return state.filter(task => task.id !== action.id)
    case 'DELETE_ALL':
      return []
    default:
      return state
  }
}

export default tasksReducer;
