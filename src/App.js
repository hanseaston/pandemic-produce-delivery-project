/**
 * @Library
 */
import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { auth, createUserProfileDocument } from "./firebase/firebase";

/**
 * @Selector
 */
import { selectCurrentUser } from "./redux/users/userSelector";
import { selectProductsForPreview } from "./redux/shop/shopSelector";

/**
 * @Action
 */
import { setCurrentUser } from "./redux/users/userAction";

/**
 * @Components
 */
import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import CartCheckoutPage from "./pages/cart-checkout/cart-checkout";
import SignInAndSignUp from "./pages/signin-signup/signin-signup";

/**
 * @Style
 */
import "./App.css";

/**
 * @class
 * Main entry point of app front-end logic
 */
class App extends React.Component {
  /**
   * When app component mounts, needs to fetch user information if necessary
   */

  componentDidMount() {
    const { setCurrentUser } = this.props;

    // Once the user's authentification status is changed
    auth.onAuthStateChanged(async (user) => {
      if (user !== null) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });

          /** Programatically populating collection data into firebase,
           *  Only need to do once, so commented it out
           */
          // addCollectionAndDocuments(
          //   "products",
          //   collectionItems.map(({ title, items }) => ({ title, items }))
          // ).catch((err) => console.log(err));
        });
      } else {
        // No user is set, set current user to null
        setCurrentUser(null);
      }
    });
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
