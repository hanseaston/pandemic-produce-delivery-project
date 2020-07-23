import React from "react";
import "./about.scss";

const About = () => {
    const paragraphOne = "Glad you are here. We are the Seattle Produce Delivery, a small delivery service"
    + " prodviding produce delivery services around the Seattle neighborhood. "
    + " The pandemic has been challengine for everyone, and some faced greater challenges "
    + " in life than others. Our goal is to help those who have difficulty going out to shop "
    + " themselves."

    const paragraphTwo = "We are here to offer you help. We buy goods from wholesalers in Seattle area,
    + " and we deliver them directly to your doorsteps."

    return (
        <div>
        <p> {paragraphOne} </p>
        <br />
        <p> {paragraphTwo} </p>
        </div>
    )





}