import React, { Component } from 'react';
import logo from '../../images/Logo.svg'; 
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
           
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
            <a href="/review">Order Review</a>
            <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;