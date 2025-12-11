import { GET_FRIENDS, GET_FRIENDS_ERROR } from "../actions";

const initialState = {
  list: [],
  error: "",
};

const friendsReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_FRIENDS:
      return {
        ...state,
        list: action.payload,
      };

    case GET_FRIENDS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default friendsReducer;
