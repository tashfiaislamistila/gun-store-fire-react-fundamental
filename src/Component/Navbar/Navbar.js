import React from 'react';
import './Navbar.css';
import { BsFillCartFill } from "react-icons/bs";

const Navbar = ({ openModal, cart }) => {
    return (
        <div>
            <nav className='navbar'>
                <h1>Gun Fire Store</h1>
                <div className='cart-counter' onClick={openModal}>
                    <span>{cart.length}</span>
                    <BsFillCartFill className='icon' />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;