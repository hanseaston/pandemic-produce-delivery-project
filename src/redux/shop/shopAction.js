import { ShopActionType } from "./shopActionType";

export const populateProducts = (products) => ({
  type: ShopActionType.POPULATE_PRODUCTS,
  payload: products,
});
