import { GET_PROFILE } from "../actions";
const initialState = {
  content: {},
};
const profileReducer = function (currentState = initialState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...currentState,
        content: action.payload,
      };
    default:
      return currentState;
  }
};

export default profileReducer;
