
const errorReducer = (state = '', action) => {
  switch (action.type) {
    case 'DISPLAY_ERROR':
      return action.message;
    case 'REMOVE_ERROR':
      return '';
    default:
      return state;
  }
}

export default errorReducer;
