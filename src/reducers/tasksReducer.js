
const tasksReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD':
      return [
        ...state,
        {
          name: action.name
        }
      ]
    case 'DELETE':
      return state.filter(task => task.id !== action.id)

    default:
      return state
  }
}

export default tasksReducer;
