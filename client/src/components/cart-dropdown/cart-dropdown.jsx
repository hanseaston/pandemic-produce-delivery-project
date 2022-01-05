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


let useClickOutside = (handler) => {
  var menuRef = useRef();

  useEffect(() => {
    // Will check if the handler is outside of menuRef and, if so, perform the operation.
    let maybeHandler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    // Perform this code when unmounting. Only occurs when closing the page.
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    }
  });

  return menuRef;
}

const CartDropdown = ({ cart, history, dispatch }) => 

// When CartDropdown changes, make the UseEffect option change
domNode = useClickOutside(() => {
  dispatch(toggleCartHidden());
});

(
  <div className='cart-dropdown'>
    <div ref={domNode} className='cart-items'>
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
