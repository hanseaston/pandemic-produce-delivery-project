import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cartAction";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.scss";

import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cartSelector";

const CartIcon = ({ toggleCartHidden, getCartCount }) => (
  // Importing toggleCartHidden from redux (the state of the parent component).
  // We then change that state when clicking.
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{getCartCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  getCartCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
