import { TOGGLE_MODE } from "../actions/types";

const modeReducer = (state = false, action) => {
  switch(action.type) {
    case TOGGLE_MODE:
      return !state;
      default:
        return state;
  }
}

export default modeReducer;
