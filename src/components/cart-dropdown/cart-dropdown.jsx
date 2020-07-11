import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import { toggleCartHidden } from "../../redux/cart/cartAction";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cartSelector";

import "./cart-dropdown.scss";

const CartDropdown = ({ cart, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cart.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton
      onClick={() => {
        history.push("./checkout");
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
