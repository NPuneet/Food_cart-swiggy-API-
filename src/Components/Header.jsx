import FoodFireLogo from "../assets/momos23.webp";
import React from "react";
import { Link } from "react-router-dom";


// Title component for display logo
const Title = () => (
  
    <img className="logo" src={FoodFireLogo} alt="Food Fire Logo" />
  
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <li><Link to='/'>Cart</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
