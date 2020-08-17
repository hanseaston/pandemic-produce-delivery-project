import React from "react";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { connect } from "react-redux";
import { ReactComponent as PotatoLogo } from "../../assets/potato.svg";
import CardIcon from "../cart-icon/cart-icon";
import CardDropDown from "../cart-dropdown/cart-dropdown";
import { selectCartHidden } from "../../redux/cart/cartSelector";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/users/userSelector";
import  ShopHeader  from "../shop-header/shop-header"

import "./header.scss";

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <PotatoLogo className='logo' />
    </Link>
    <ShopHeader className='shoptitle' />
    <div className='options'>
      <NavLink className='option' to='/'>
        HOME
      </NavLink>
      <NavLink activeStyle={{ opacity: 0.6 }} className='option' to='/about'>
        ABOUT
      </NavLink>
      <NavLink activeStyle={{ opacity: 0.6 }} className='option' to='/shop'>
        SHOP
      </NavLink>
      {currentUser && currentUser.privilege ? (
        <NavLink
          activeStyle={{ opacity: 0.6 }}
          className='option'
          to='/admin/add'
        >
          ADMIN
        </NavLink>
      ) : null}
      {currentUser && currentUser.privilege ? (
        <NavLink
          activeStyle={{ opacity: 0.6 }}
          className='option'
          to='/admin/checkout'
        >
          ORDERS
        </NavLink>
      ) : null}
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <NavLink activeStyle={{ opacity: 0.6 }} className='option' to='/signin'>
          SIGN IN
        </NavLink>
      )}
      <NavLink
        activeStyle={{ opacity: 0.6 }}
        className='option'
        to='/covid-glimpse'
      >
        GLIMPSE
      </NavLink>
      <CardIcon />
    </div>
    {hidden ? null : <CardDropDown />}
  </div>
);

/** Get the state from */
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
