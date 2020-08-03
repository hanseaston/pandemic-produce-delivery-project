/**
 * Shop selector exports memoized selectors to fetch shop data
 */

import { createSelector } from "reselect";

// Shop input selector
const selectShop = (state) => state.shop;

// Fetching the entire shop data
export const selectProducts = createSelector(
  [selectShop],
  (shop) => shop.products
);

// Selecting the loading state of the products, true or false
export const selectProductIsLoading = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

// Selecting whether the product is already loaded or not
export const selectIsProductLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.products
);

// Transforming the shop data (which is stored in object, into an array form for map function)
export const selectProductsForPreview = createSelector(
  [selectProducts],
  (products) => {
    return products
      ? Object.keys(products).map((category) => products[category])
      : [];
  }
);

// Selecting a particular category of the products in the shop for overview
export const selectProductsInCategory = (category) =>
  createSelector([selectProducts], (products) => products[category]);
