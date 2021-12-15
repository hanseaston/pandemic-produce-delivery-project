import { CartActionType } from "./cartActionType";

// Changing the state of CartActionType with emphasis on menu item.
export const toggleCartHidden = (user) => ({
  type: CartActionType.TOGGLE_MENU_ITEM,
});

export const addItemToCart = (item) => ({
  type: CartActionType.ADD_ITEM_TO_CART,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: CartActionType.REMOVE_ITEM_FROM_CART,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CartActionType.CLEAR_ITEM_FROM_CART,
  payload: item,
});
