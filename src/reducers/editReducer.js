
const editReducer = (state=false, action) => {
  switch(action.type) {
    case 'TOGGLE_EDIT':
      return !state
    default:
      return state
  }
}

export default editReducer;
