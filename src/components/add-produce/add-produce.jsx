import React from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import "./add-produce.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      produceName: "",
      producePrice: "",
      produceImage: "",
      produceDesp: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { produceName, producePrice } = this.state;
    alert(
      "After submitting the form, the state is [" + produceName,
      +", " + producePrice + "]"
    );
    this.setState({
      produceName: "",
      producePrice: "",
      produceImage: "",
      produceDesp: "",
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    this.setState({ [name]: value });
  };

  render() {
    const { produceName, producePrice, produceImage, produceDesp } = this.state;
    return (
      <div className='add-produce'>
        <h2 className='title'>Add produce information</h2>
        <form className='sign-produce-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='produceName'
            value={produceName}
            onChange={this.handleChange}
            label='Add produce name'
            required
          />
          <FormInput
            type='number'
            name='producePrice'
            step='0.01'
            value={producePrice}
            onChange={this.handleChange}
            label='Add produce price'
            required
          />
          <FormInput
            type='text'
            name='produceImage'
            value={produceImage}
            onChange={this.handleChange}
            label='Link Product Image'
            required
          />
          <FormInput
            type='textarea'
            name='produceDesp'
            value={produceDesp}
            onChange={this.handleChange}
            label='Add produce descroption'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>ADD PRODUCT</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
