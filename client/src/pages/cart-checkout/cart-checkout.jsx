import React from "react";
import StripeCheckout from "../../components/stripe-button/stripe-button";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsTotalPrice,
} from "../../redux/cart/cartSelector";
import { selectCurrentUser } from "../../redux/users/userSelector";
import "./cart-checkout.scss";
import axios from "axios";

class CheckoutPage extends React.Component {
  paymentSucceeded = () => {
    const { cartItems, user } = this.props;
    const { displayName, email } = user;
    // Want to transform the cartItems into an array of object
    // Where each object contains the product name and the product quantity bought
    const transformedCartItems = cartItems.map((cartItem) => {
      const { name, quantity, id } = cartItem;
      return { name, quantity, _id: id };
    });
    axios
      .post("/api/checkout", {
        transformedCartItems,
        displayName,
        email,
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

  render() {
    const { cartItems, total, user } = this.props;
    return (
      <div className='checkout-page'>
        <div className='checkout-header'>
          <div className='header-block'>
            <span>Product</span>
          </div>
          <div className='header-block'>
            <span>Description</span>
          </div>
          <div className='header-block'>
            <span>Quantity</span>
          </div>
          <div className='header-block'>
            <span>Price</span>
          </div>
          <div className='header-block'>
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className='total'>TOTAL: ${total.toFixed(2)}</div>
        {user ? (
          <div className="payout-button">
            <div className='test-warning'>
              **Our Shop Page is still under Development**
              <br/>
              **Please Do not Enter your Real Credit/Debit Card Information**
              <br/>
              **Please use the following test Credit Card for payment**
              <br/>
              4242 4242 4242 4242 - Exp : 01/22 - CVV:123  
            </div>
            <StripeCheckout
              price={total}
              paymentSuccessCallback={this.paymentSucceeded}
            />
          </div>
        ) : (
          //TODO: a more interactive message would be better
          <h2 style={{ color: "red" }}> You need to log in first to pay </h2>
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotalPrice,
  user: selectCurrentUser,
});

export default connect(mapStateToProps)(CheckoutPage);
