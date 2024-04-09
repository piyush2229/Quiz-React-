import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo .png'; // Adjust path as necessary
import ques from './info .png'; // Adjust path as necessary
import './Nav.css';

function Nav() {
  return (
    <div className="nav">
      <div className="logo">
      <img src={logo} alt="Logo" />
      </div>
      <div className="menu">
        <ul>
          <li><Link  style={{ textDecoration: 'none' }}to="/">Home</Link><hr /></li>
          <li><Link  style={{ textDecoration: 'none' }} to="/about">About</Link><hr /></li>
        </ul>
      </div>
      <div className="about">
      <Link to="/info">
      <img src={ques} alt="Info" />
      </Link>
      
      </div>
    </div>
  );
}

export default Nav;
