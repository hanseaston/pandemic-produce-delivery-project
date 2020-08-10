import React from "react";
import "./covid-glimpse.module.css";
import { Cards, Charts, CountryPicker } from "../../components/covid-glimpse";
import { fetchData } from "./api/utility";

class CovidGlimpse extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <h1> Covid Glimpse </h1>
        <Cards data={data} />
        <CountryPicker />
        <Charts />
      </div>
    );
  }
}

export default CovidGlimpse;
