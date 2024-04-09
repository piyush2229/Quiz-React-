import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo .png';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer">
            <hr />
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <div className="copyright">
                <p>Copyright @{currentYear} - All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;
