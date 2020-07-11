import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cartSelector";

import "./cart-dropdown.scss";

const CartDropdown = ({ cart }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cart.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cart: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
