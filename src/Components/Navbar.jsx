import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-primary justify-content-between">
      <img className="logo my-sm-0 mr-sm-2" src="./Images/profilefyi_logo.jpeg" alt="logo"/>
      <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      
      {/* Link to the /add-to-cart route */}
      <Link to="/add-to-cart" className="add-to-cart mr-sm-2">
        <img src="./Images/Add_to_cart_image.jpg" alt="Add to Cart" />
      </Link>
    </nav>
  );
};

export default Navbar;
