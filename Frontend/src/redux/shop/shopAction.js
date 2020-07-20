import { ShopActionType } from "./shopActionType";

import { firestore, convertProductsToMap } from "../../firebase/firebase";

import { convertDBFormatToReactFormat } from "./shopUtil";

import axios from "axios";

/** Indicating the starting process of fetching products from DB */
export const fetchProductsStart = () => ({
  type: ShopActionType.FETCH_COLLECTION_START,
});

/** Fetching product success handler */
export const fetchProductsSuccess = (products) => ({
  type: ShopActionType.FETCH_COLLECTION_SUCCESS,
  payload: products,
});

/** Fetching product failure handler */
export const fetchProductsFailure = (errMesg) => ({
  type: ShopActionType.FETCH_COLLECTION_FAILURE,
  payload: errMesg,
});

/** Fetching products dispatch action with redux thunk */
export const fetchProductsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("products");
    dispatch(fetchProductsStart());
    collectionRef
      .get()
      .then(async (snapshot) => {
        const products = convertProductsToMap(snapshot);
        console.log("products are ", products);
        dispatch(fetchProductsSuccess(products));
      })
      .catch((err) => dispatch(fetchProductsFailure(err.message)));
  };
};

export const fetchProductsInMongoDB = () => {
  return (dispatch) => {
    dispatch(fetchProductsStart());
    axios
      .get("/products")
      .then((products) => {
        const transformedProducts = convertDBFormatToReactFormat(products.data);
        dispatch(fetchProductsSuccess(transformedProducts));
      })
      .catch((err) => dispatch(fetchProductsFailure(err.message)));
  };
};
