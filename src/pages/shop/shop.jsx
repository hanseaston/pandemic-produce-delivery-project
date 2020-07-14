import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview";
import ProductCollection from "../../pages/product-collections/product-collections";
import { firestore, convertProductsToMap } from "../../firebase/firebase";

class ShopPage extends React.Component {
  componentDidMount() {
    const collectionRef = firestore.collection("products");
    collectionRef.onSnapshot(async (snapshot) => {
      console.log(convertProductsToMap(snapshot));
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

export default ShopPage;
