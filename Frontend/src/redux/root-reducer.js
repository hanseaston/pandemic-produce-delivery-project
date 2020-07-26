import { combineReducers } from "redux";

import userReducer from "./users/userReducer";
import cartReducer from "./cart/cartReducer";
import shopReducer from "./shop/shopReducer";
import directoryReducer from "./frontpage-directory/directoryReducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer,
  directory: directoryReducer,
});
