import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 11:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "12:00 PM - 12:00 AM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "9:00 AM - 9:00 PM",
    },
    {
      id: 5,
      day: "Monday",
      time: "3:00 PM - 9:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "9:00 AM - 3:00 PM",
    },
  ];

  return (
    <>
      <footer className={"container"}>
        <hr />
        <div className="content">
          <div>
            {/* <img src="/logo.png" alt="logo" className="logo-img"/> */}
            <h1 style={{color:"#800020"}}> AI FIRE SYSTEM</h1>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/sensors"}>Sensors</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/services"}>Services</Link>
            </ul>
          </div>
          <div>
            <h4>Contact for:</h4>
            <ul>
            <li>Emergency</li>
            <li>service provide</li>
            <li>installation</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span>+91 9023504245</span>
            </div>
            <div>
              <MdEmail />
              <span>deep@gmail.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>Elight Ornet, Gota Chokdi</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
