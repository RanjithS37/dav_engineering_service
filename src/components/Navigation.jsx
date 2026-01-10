import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <span className="logo-text">DAV ENGINEERING</span>
          <span className="logo-subtitle">Services</span>
        </Link>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/')}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about')}`}
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link 
            to="/services" 
            className={`nav-link ${isActive('/services')}`}
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link 
            to="/infrastructure" 
            className={`nav-link ${isActive('/infrastructure')}`}
            onClick={closeMenu}
          >
            Infrastructure & Team
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact')}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>

        <div className="nav-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
          <span className={`bar ${isOpen ? 'bar1-active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'bar2-active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'bar3-active' : ''}`}></span>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

