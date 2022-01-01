import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";

//This will need to be triggered when clicking outside of the modal.
import { toggleCartHidden } from "../../redux/cart/cartAction";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cartSelector";

import "./cart-dropdown.scss";

useEffect(() => {
  console.log("working");
  document.addEventListener("mousedown", () => dispatch(toggleCartHidden()));
})
const CartDropdown = ({ cart, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cart.length ? (
        cart.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
      ) : (
        <span className='empty-message'> Your cart is empty.</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cart: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
