import { CartActionType } from "./cartActionType";

export const toggleCartHidden = (user) => ({
  type: CartActionType.TOGGLE_MENU_ITEM,
});

export const addItemToCart = (item) => ({
  type: CartActionType.ADD_ITEM_TO_CART,
  payload: item,
});

export const removeItemToCart = (item) => ({
  type: CartActionType.REMOVE_ITEM_FROM_CART,
  payload: item,
});
