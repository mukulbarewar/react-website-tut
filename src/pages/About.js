import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      >
        {" "}
        Hi Mukul{" "}
      </div>
      <div className="aboutBottom">
        <h1> ABOUT US </h1>
        <p>
          An About Us page is an integral piece of content to have on your
          website. Every single successful business has one, no matter their
          industry or what they sell. After all, every brand has a story – and
          your About Us page helps you tell yours. That’s important because,
          these days, story and connection matter more than ever to customers.
          In a Demand Gen survey, 55% of B2B buyers said content that tells a
          strong, resonating story is what would make them most likely to talk
          to sales. Because your About Us page is one of the first places
          customers will look to find out about your business and story, it’s a
          foundational page that deserves time and attention to get right. Let’s
          talk about it, including how to write an About Us page.
        </p>
      </div>
    </div>
  );
}

export default About;
