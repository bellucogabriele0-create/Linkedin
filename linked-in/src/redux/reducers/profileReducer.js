import { GET_PROFILE, GET_PROFILE_EXP } from "../actions";
const initialState = {
  content: {},
  experiences: [],
};
const profileReducer = function (currentState = initialState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...currentState,
        content: action.payload,
      };
    case GET_PROFILE_EXP:
      return {
        ...currentState,
        experiences: action.payload,
      };
    default:
      return currentState;
  }
};

export default profileReducer;
