import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"ABOUT US"}
        desc={"We are dedicated to revolutionizing fire safety through cutting-edge AI technology. Specializing in advanced fire detection and prevention solutions, we integrate artificial intelligence to provide unparalleled accuracy and reliability. Our commitment extends to delivering real-time monitoring, early warning systems, and predictive analytics to safeguard lives and property. With a focus on innovation and client-centric solutions, we ensure seamless integration with existing infrastructure and proactive support for comprehensive fire safety management. Trust [Company Name] for state-of-the-art AI fire systems that redefine safety standards and protect what matters most."}
        imageUrl={"https://wbp.managemyaccountonline.net/res/org0011/s6eb0c4d3928a40d.jpg"}
      />
      {/* <Biography imageUrl={"/whoweare.png"} /> */}
    </>
  );
};

export default AboutUs;
