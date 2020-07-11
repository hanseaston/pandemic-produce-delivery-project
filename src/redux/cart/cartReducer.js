import { CartActionType } from "./cartActionType";
import { addItemToCart } from "./cartUtil";

const INITIAL_STATE = {
  hidden: true,
  cart: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionType.TOGGLE_MENU_ITEM:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionType.ADD_ITEM_TO_CART:
      return {
        ...state,
        cart: addItemToCart(state.cart, action.payload),
      };
    case CartActionType.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cart: removeItemToCart(state.cart, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
