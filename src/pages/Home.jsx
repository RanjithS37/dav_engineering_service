import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>DAV ENGINEERING SERVICES</h1>
          <p className="hero-subtitle">Multi-disciplinary Engineering & Manpower Consulting Company</p>
          <p className="hero-description">
            Established in 2013, based in Chennai, India. Focused on contemporary and 
            cost-effective services with core competence and domain expertise in Engineering Industry.
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">Our Services</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose DAV Engineering?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Efficiency with Economy</h3>
              <p>Our motto combines efficiency with economy, leading to better customer satisfaction.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Expert Team</h3>
              <p>Dedicated highly qualified engineers with vast experience to deliver reliable service.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⏱️</div>
              <h3>Timely Delivery</h3>
              <p>Committed turnaround time with prompt, quick and scheduled services.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Industry Expertise</h3>
              <p>Domain expertise across Power, Process, Oil & Gas, Refinery, Chemical, and more.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="industries">
        <div className="container">
          <h2>Industries We Serve</h2>
          <div className="industries-grid">
            <div className="industry-tag">Power</div>
            <div className="industry-tag">Process Plant</div>
            <div className="industry-tag">Oil & Gas</div>
            <div className="industry-tag">Refinery</div>
            <div className="industry-tag">Chemical</div>
            <div className="industry-tag">Petrochemicals</div>
            <div className="industry-tag">Automotive</div>
            <div className="industry-tag">Civil / Architectural</div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Work Together?</h2>
          <p>DAV Engineering foresees to have a long-term association by providing excellent Support and Services, which will be very rewarding to your business.</p>
          <Link to="/contact" className="btn btn-primary btn-large">Get in Touch</Link>
        </div>
      </section>
    </div>
  )
}

export default Home

