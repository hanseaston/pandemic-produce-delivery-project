import React from "react";
import "./covid-glimpse.module.css";
import { Cards, Charts, CountryPicker } from "../../components/covid-glimpse";

class CovidGlimpse extends React.Component {
  render() {
    return (
      <div>
        <h1> Covid Glimpse </h1>;
        <Cards />
        <CountryPicker />
        <Charts />
      </div>
    );
  }
}

export default CovidGlimpse;
