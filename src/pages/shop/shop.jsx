import React from "react";
import { connect } from "react-redux";
import { populateProducts } from "../../redux/shop/shopAction";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview";
import ProductCollection from "../../pages/product-collections/product-collections";
import { firestore, convertProductsToMap } from "../../firebase/firebase";

class ShopPage extends React.Component {
  componentDidMount() {
    const { populateProducts } = this.props;
    const collectionRef = firestore.collection("products");
    collectionRef.onSnapshot(async (snapshot) => {
      populateProducts(convertProductsToMap(snapshot));
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={ProductCollection}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  populateProducts: (products) => dispatch(populateProducts(products)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
