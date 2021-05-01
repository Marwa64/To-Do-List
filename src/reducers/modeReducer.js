
const modeReducer = (state = false, action) => {
  switch(action.type) {
    case 'LIGHT':
      return false;
      case 'DARK':
        return true;
      default:
        return state;
  }
}

export default modeReducer;
