import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <h1>Monguí Travel</h1>
              <p>Discover the Heritage Town of Boyacá</p>
            </Link>
          </div>
          <nav className="main-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/attractions">Attractions</Link></li>
              <li><Link to="/history">History</Link></li>
              <li><Link to="/culture">Culture</Link></li>
              <li><Link to="/travel-tips">Travel Tips</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;