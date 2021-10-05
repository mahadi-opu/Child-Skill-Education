
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css";
import logo from '../../images/logo.png'


// Header Section 
const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red",
        border: "2px solid white",
        borderRadius: "5px"

    }
    return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <div className="logo py-3">
                {/* <img className="logo" src={logo} alt="Logo" /> */}
                <Link to="/" className="logo-link"><h1>Childskill-Education</h1></Link> 
                </div>
                <nav className="menu pt-4">
                    <NavLink activeStyle={activeStyle} className="p-2 menu-item" to="/home">Home</NavLink>
                    <NavLink activeStyle={activeStyle} className="p-2 menu-item" to="/about">About US</NavLink>
                    <NavLink activeStyle={activeStyle} className="p-2 menu-item" to="/gallery">Gallery</NavLink>
                    <NavLink activeStyle={activeStyle} className="p-2 menu-item" to="/courses">Courses</NavLink>
                    <NavLink activeStyle={activeStyle} className="p-2 menu-item" to="/contactus">Contact US</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;