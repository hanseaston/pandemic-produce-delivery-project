import { ShopActionType } from "./shopActionType";

/**
 * @products: products contained in the data
 * @isFetching: whether fetching product is currently taking place
 * @errorMessage: if error encountered when fetching data
 */
const INITIAL_STATE = {
  products: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionType.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionType.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        products: action.payload,
      };
    case ShopActionType.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessag: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
