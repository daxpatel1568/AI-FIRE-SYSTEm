import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to AI FIRE SYSTEM  | Your Trusted SAFETY PROVIDER"
        }
        desc={"we harness the power of artificial intelligence to redefine how we protect lives and property from fire hazards. Our AI fire systems are not just detectors; they are intelligent guardians, constantly monitoring and analyzing conditions to provide early detection and swift response. With cutting-edge technology and a commitment to excellence, we ensure proactive fire prevention, reliable alerts, and seamless integration with your existing infrastructure. Trust [Company Name] to safeguard what matters most, setting new standards in fire safety through innovation and dedication."}
        imageUrl={"http://clipartix.com/wp-content/uploads/2016/09/Fireman-cute-firefighter-clipart-free-clipart-images-image-2-2.png"}
      />
      <Biography imageUrl={"https://www.youngsinsurance.ca/files/91863649thumbnail.jpg"
      }desc2={"We are driven by a relentless commitment to excellence in fire safety technology. With a team of dedicated engineers and experts, we leverage state-of-the-art AI capabilities to create robust fire detection and prevention systems. Our solutions not only detect potential fire hazards swiftly but also mitigate risks effectively through intelligent analysis and proactive measures. We believe in building partnerships based on trust, reliability, and innovation, ensuring that every client receives tailored solutions that meet their unique safety needs. As we continue to innovate and evolve, our mission remains steadfast: to protect communities, businesses, and institutions from the devastating impact of fires, ensuring a safer and more secure environment for all."}  
      desc={"Leaders in advanced fire detection and prevention technologies. With a deep commitment to innovation and safety, we specialize in integrating cutting-edge AI solutions into fire systems. Our mission is to safeguard lives and property by delivering reliable, intelligent fire detection, early warning systems, and real-time monitoring capabilities. Backed by expertise and dedication, we strive to redefine fire safety standards and ensure peace of mind for our clients worldwide."}
       />
      {/* <Departments /> */}
      <MessageForm />
    </>
  );
};

export default Home;
