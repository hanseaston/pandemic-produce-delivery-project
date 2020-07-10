import { combineReducers } from "redux";

import userReducer from "./users/userReducer";
import cartReducer from "./cart/cartReducer.js";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
