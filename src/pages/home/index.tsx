import React from "react";

import { ReactComponent as AnimationPic } from "assets/images/animation.svg";
import Heading from "components/Heading";
import Description from "components/Description";
import "./style.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage__greeting">
        <div className="homepage-heading">
          <Heading title="Hello!" type="primary" />
        </div>
        <div className="homepage-text">
          <Description text="I am a software developer." type="left" />
          <Description
            text="I have experience designing, developing, and maintaining web applications across both front-end and back-end domains. 
            My primary focus is on front-end technologies, where I specialize in TypeScript and ReactJS, delivering dynamic and responsive user interfaces. 
            On the back end, I am proficient in NodeJS, C#, and .NET, enabling me to build robust APIs and microservices."
            type="left"
          />
        </div>
      </div>
      <div className="homepage__animation">
        <AnimationPic />
      </div>
    </div>
  );
};

export default Homepage;
