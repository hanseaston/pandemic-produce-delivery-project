import React from "react";
import { connect } from "react-redux";
import { populateProducts } from "../../redux/shop/shopAction";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview";
import ProductCollection from "../../pages/product-collections/product-collections";
import { firestore, convertProductsToMap } from "../../firebase/firebase";
import WithSpinner from "../../components/spinner/spinner";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const ProductCollectionWithSpinner = WithSpinner(ProductCollection);

class ShopPage extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    const { populateProducts } = this.props;
    const collectionRef = firestore.collection("products");
    collectionRef.onSnapshot(async (snapshot) => {
      populateProducts(convertProductsToMap(snapshot));
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <ProductCollectionWithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  populateProducts: (products) => dispatch(populateProducts(products)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
