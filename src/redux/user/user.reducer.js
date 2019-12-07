import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null
};

// Every single reducer will get the action, even if it has nothing to do with this reducer.
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
