import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments,
} from "./firebase/firebase";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/users/userSelector";
import "./App.css";
import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import CartCheckoutPage from "./pages/cart-checkout/cart-checkout";
import SignInAndSignUp from "./pages/signin-signup/signin-signup";

import { setCurrentUser } from "./redux/users/userAction";
import { selectProductsForPreview } from "./redux/shop/shopSelector";

class App extends React.Component {
  componentDidMount() {
    const { setCurrentUser, collectionItems } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
          addCollectionAndDocuments(
            "products",
            collectionItems.map(({ title, items }) => ({ title, items }))
          ).catch((err) => console.log(err));
        });
      } else {
        setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth = null;
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CartCheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.user ? <Redirect to='/' /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  collectionItems: selectProductsForPreview,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
