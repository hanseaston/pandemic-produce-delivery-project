import React from "react";

import SignUp from "../../components/sign-up/sign-up";
import SignIn from "../../components/sign-in/sign-in";
import "./signin-signup.scss";

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
