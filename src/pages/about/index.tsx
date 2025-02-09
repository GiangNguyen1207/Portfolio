import React from "react";

import avatar from "assets/images/pic.jpg";
import Heading from "components/Heading";
import Description from "components/Description";
import "./style.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about__content">
        <img src={avatar} alt="avatar" className="avatar" />
        <Heading title="My name is Giang. Nice to meet you!" type="normal" />
        <div className="about-description">
          <Description text="Little story about me:" type="center" />
          <Description
            text="I have had a long-standing interest in technology and building web applications. 
            After graduating with a Business Administration degree from Haaga-Helia University of Applied Sciences two years ago, 
            I began focusing on equipping myself with the necessary skills and technologies to become a full-stack developer. "
            type="center"
          />
          <br />
          <Description
            text="I am a quick learner, solution-oriented, and an optimistic individual who thrives on challenges. 
            I may not always be the quickest developer in delivering solutions. However, I believe that the outcomes of my work will stand among the finest.
            This is because I adhere to the guiding principles of quality, efficiency, and continuous improvement."
            type="center"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
