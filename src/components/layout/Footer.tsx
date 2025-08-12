import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Monguí Travel Agency</h3>
            <p>Your gateway to the beautiful heritage town of Monguí, Boyacá, Colombia</p>
          </div>
          
          <div className="footer-links">
            <div className="link-column">
              <h4>Explore</h4>
              <ul>
                
                <li><Link to="/">Home </Link></li>
                <li><Link to="/attractions">Attractions</Link></li>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/culture">Culture</Link></li>
              </ul>
            </div>
            
            <div className="link-column">
              <h4>Travel</h4>
              <ul>
                <li><Link to="/travel-tips">Travel Tips</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/festivos">Festivals</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Monguí Travel Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;