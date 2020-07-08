import React from "react";
import ShopData from "./shopdata";

class shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: ShopData,
    };
  }

  render() {
    return <h1>SHop</h1>;
  }
}

export default shop;
