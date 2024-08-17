import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ totalQuantity }) => (
    <nav className="navbar navbar-light bg-primary justify-content-between">
        <img className="logo my-sm-0 mr-sm-2" src="https://cdn-icons-png.flaticon.com/512/8539/8539259.png" alt="logo" />
        <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <Link to="/cart" className="add-to-cart mr-sm-2">
            <img className="cart-img" src="https://i.pinimg.com/736x/2b/35/a4/2b35a4763a31b6f5f40d9de9d7e05f88.jpg" alt="Cart" />
            <p className='number'><span>{totalQuantity}</span></p> 
        </Link>
    </nav>
);

export default Navbar;
