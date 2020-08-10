import React from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import "./add-produce.scss";

import axios from "axios";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      produceName: "",
      produceType: "",
      producePrice: "",
      produceImage: "",
      produceDesp: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    let {
      produceName,
      produceType,
      producePrice,
      produceImage,
      produceDesp,
    } = this.state;

    produceName = produceName.toLowerCase();
    produceType = produceType.toLowerCase();

    axios
      .post("products", {
        produceName,
        produceType,
        producePrice,
        produceImage,
        produceDesp,
      })
      .then((res) => {
        alert("products added!");
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });

    this.setState({
      produceName: "",
      produceType: "",
      producePrice: "",
      produceImage: "",
      produceDesp: "",
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    let {
      produceName,
      producePrice,
      produceImage,
      produceDesp,
      produceType,
    } = this.state;
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
            type='text'
            name='produceType'
            value={produceType}
            onChange={this.handleChange}
            label='Add produce type'
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
