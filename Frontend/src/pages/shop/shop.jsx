import React from "react";
import { connect } from "react-redux";
import { fetchProductsStartAsync } from "../../redux/shop/shopAction";
import {
  selectProductIsLoading,
  selectIsProductLoaded,
} from "../../redux/shop/shopSelector";
import { createStructuredSelector } from "reselect";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview";
import ProductCollection from "../../pages/product-collections/product-collections";
import WithSpinner from "../../components/spinner/spinner";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const ProductCollectionWithSpinner = WithSpinner(ProductCollection);

class ShopPage extends React.Component {
  state = {
    isLoading: true,
  };

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
            <ProductCollectionWithSpinner isLoading={!isLoaded} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchingProducts: () => dispatch(fetchProductsStartAsync()),
});

const mapStateToProps = createStructuredSelector({
  isFetching: selectProductIsLoading,
  isLoaded: selectIsProductLoaded,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
