import { GET_PROFILE, GET_PROFILE_EXP, GET_POSTS_PROFILE } from "../actions";
const initialState = {
  content: {},
  experiences: [],
  posts: [],
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
    case GET_POSTS_PROFILE:
      return {
        ...currentState,
        posts: action.payload,
      };
    default:
      return currentState;
  }
};

export default profileReducer;
