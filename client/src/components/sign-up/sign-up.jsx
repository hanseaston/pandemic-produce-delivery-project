/**
 * @class Signup class handling all of the signup logic
 */

/**
 * @libraries
 */
import React from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase";

/**
 * @components
 */
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

/**
 * @styles
 */
import "./sign-up.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  /**
   * Creating user with given email and password
   */
  handleSubmit = async (event) => {
    // The default functionality resets the form field. This prevents that.
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      //TODO: might want to show a message instead of alert
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      // Storing the
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      //TODO: similar here, might want to show another more helpful error message
      switch (err.code) {
        case "auth/weak-password":
          alert("password too weak, try again!");
          break;
        case "auth/invalid-email":
          alert("the email you typed in is invalid, try again!");
          break;
        case "auth/email-already-in-use":
          alert(
            "the email you typed in has already been registered, try another one"
          );
          break;
        default:
          alert("an error occurred");
      }
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
