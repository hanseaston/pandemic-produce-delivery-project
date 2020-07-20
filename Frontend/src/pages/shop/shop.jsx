/**
 * @class
 * Handles all of the shop-related page logic
 */

/**
 * @libraries
 */
import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

/**
 * @action
 */
import {
  fetchProductsStartAsync,
  fetchProductsInMongoDB,
} from "../../redux/shop/shopAction";

/**
 * @selector
 */
import {
  selectProductIsLoading,
  selectIsProductLoaded,
} from "../../redux/shop/shopSelector";

/**
 * Components
 */
import CollectionOverview from "../../components/collection-overview/collection-overview";
import ProductCollection from "../product-collections/product-collections";
import WithSpinner from "../../components/spinner/spinner";

/**
 * HOC with spinners
 */
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const ProductCollectionWithSpinner = WithSpinner(ProductCollection);

class ShopPage extends React.Component {
  // initially, when we render no spinners
  state = {
    isLoading: true,
  };

  /** After mounting, do async fetch to retrieve products data */
  componentDidMount() {
    const { fetchingProducts } = this.props;
    fetchingProducts();
  }

  render() {
    const { match, isFetching, isLoaded } = this.props;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={isFetching} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            /** Note: needs isLoaded function rather than isFetching function
             * isFetching wouldn't work because we will be extracting product
             * information in the product collection page.
             */
            <ProductCollectionWithSpinner isLoading={!isLoaded} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // fetchingProducts: () => dispatch(fetchProductsStartAsync()),
  fetchingProducts: () => dispatch(fetchProductsInMongoDB()),
});

const mapStateToProps = createStructuredSelector({
  isFetching: selectProductIsLoading,
  isLoaded: selectIsProductLoaded,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
