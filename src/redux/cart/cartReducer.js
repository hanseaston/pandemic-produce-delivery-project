
import { CartActionType } from "./cartActionType";

const INITIAL_STATE = {
  hidden = true,
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionType.TOGGLE_MENU_ITEM:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
