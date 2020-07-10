import { combineReducers } from "redux";

import userReducer from "./users/userReducer";

export default combineReducers({
  user: userReducer,
});
