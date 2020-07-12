import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

// Fetching the entire shop data
export const selectProducts = createSelector(
  [selectShop],
  (shop) => shop.products
);

// Transforming the shop data (which is stored in object, into an array form for map function)
export const selectProductsForPreview = createSelector(
  [selectProducts],
  (products) => Object.keys(products).map((category) => products[category])
);

// Selecting a particular category of the products in the shop for overview
export const selectCategory = (category) =>
  createSelector([selectProducts], (products) => products[category]);
