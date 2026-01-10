import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>DAV ENGINEERING SERVICES</h3>
          <p>Multi-disciplinary Engineering & Manpower Consulting Company</p>
          <p>Established in 2013 | Based in Chennai, India</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/infrastructure">Infrastructure & Team</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>H.O. No. 38/39, 1st Floor</p>
          <p>Corammendal Towns SIDCO Industrial Estate</p>
          <p>Ambattur-Chennai-53</p>
          <p>Mobile: +91-6385222170</p>
          <p>Mobile: +91-9789048001</p>
          <p>Email: davengg123@gmail.com</p>
        </div>

        <div className="footer-section">
          <h4>Our Commitment</h4>
          <p>Cost effective Quality work</p>
          <p>Personalised and Dedicated Services</p>
          <p>Timely follow-up procedures</p>
          <p>Customer Satisfaction</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} DAV ENGINEERING SERVICES. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

