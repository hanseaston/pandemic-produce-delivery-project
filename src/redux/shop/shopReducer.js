import { ShopActionType } from "./shopActionType";

const INITIAL_STATE = {
  products: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionType.POPULATE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
