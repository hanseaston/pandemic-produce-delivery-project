import React from "react";
import "./about.scss";

const About = () => {
  const paragraphOne =
    "Glad you are here! We are the Seattle Produce Delivery, a small delivery service" +
    " in Seattle neighborhood. " +
    " The pandemic has been challenging for everyone, and we want to try our best to help." +
    " Our goal is to help those who have difficulty going out to shop " +
    " themselves.";

  const paragraphTwo =
    "We are here to offer you help. We buy goods from wholesalers in Seattle area," +
    " and we deliver them directly to your doorsteps. Right now, the service is limited " +
    " to people we know personally due to limited staff. However, we are planning to expand" +
    " in the future so that everyone is able to enjoy the service. Stay tuned!";

  return (
    <div className='about-content'>
      <p> {paragraphOne} </p>
      <br />
      <p> {paragraphTwo} &#128522;</p>
      <p>
        <a
          href='mailto:hanszhang2000@gmail.com?subject=Inquiry About Seattle Shop Delivery'
          style={{ color: "red" }}
        >
          Email us
        </a>{" "}
        for inquiries or simply getting connected!
      </p>
    </div>
  );
};

export default About;
