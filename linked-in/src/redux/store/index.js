import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import friendsReducer from "../reducers/friendsReducers";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    friends: friendsReducer,
  },
});

export default store;
console.log(store, "store");
