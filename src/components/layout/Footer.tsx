import React from 'react';
import './Footer.css';

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
                <li><a href="/">Home</a></li>
                <li><a href="/attractions">Attractions</a></li>
                <li><a href="/history">History</a></li>
                <li><a href="/culture">Culture</a></li>
              </ul>
            </div>
            
            <div className="link-column">
              <h4>Travel</h4>
              <ul>
                <li><a href="/travel-tips">Travel Tips</a></li>
                <li><a href="/contact">Contact Us</a></li>
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