import { CartActionType } from "./cartActionType";
import { addItemToCart, removeItemFromCart } from "./cartUtil";

/* Finds the initial state of the product (the hidden part indicates the small dropdown.)
 This is normally present within the React program without Redux as:
    let [isHidden, setIsHidden] = useState(true);
*/

const INITIAL_STATE = {
  hidden: true,
  cart: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionType.TOGGLE_MENU_ITEM:
      return {
        ...state,
        // Reversing the polarity of the "hidden" state when clicked. this occurs with cartAction.
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
        cart: removeItemFromCart(state.cart, action.payload),
      };
    case CartActionType.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
