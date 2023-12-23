import moyemoye from "../assets/moyemoye.jpeg";
import React from "react";
import { Link } from "react-router-dom";
import useOnline from "./utils/useOnline";

// Title component for display logo
const Title = () => (
  <>
    <img className="logo" src={moyemoye} alt="Food Fire Logo" />
    <h4>
      Sher ka internet chalu hai 
    </h4>
  </>
);

const Header = () => {
  const status = useOnline();

  return status === true ? (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            hum sab links lazy h 
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  ): <h1>sher is relaxing</h1>;
};

export default Header;
