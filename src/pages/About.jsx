import React from 'react'
import './About.css'

function About() {
  return (
    <div className="about">
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Get to know DAV Engineering Services</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-intro">
            <h2>Our Company</h2>
            <p>
              DAV ENGINEERING SERVICES is a Multi-disciplinary Engineering & Manpower 
              Consulting Company established in 2013 based at Chennai, India. In today's 
              challenging business environment, DAV focuses on contemporary and cost-effective 
              services with Core competence and Domain expertise in Engineering Industry.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <h3>Our Team</h3>
              <p>
                DAV ENGINEERING has a team of dedicated highly qualified engineers with vast 
                experience to deliver reliable service within committed turnaround time. Our 
                motto of the company is to combine efficiency with economy which leads to 
                better customer satisfaction.
              </p>
            </div>

            <div className="about-card">
              <h3>Our Expertise</h3>
              <p>
                DAV ENGINEERING offers services in manpower using Software's such as AutoCAD, 
                Microstation, E3D, STAAD-Pro, Tekla (X-Steel), Caesar II, Revit MEP, Revit 
                Architecture, Revit Structure, etc.
              </p>
            </div>

            <div className="about-card">
              <h3>Our Vision</h3>
              <p>
                DAV ENGINEERING Foresees to have a long-term association by providing excellent 
                Support and Services, which will be very rewarding to your business.
              </p>
            </div>
          </div>

          <div className="mission-section">
            <h2>Our Mission</h2>
            <p>
              DAV Engineering is committed to provide its customers with a broad spectrum of 
              service delivery. This includes providing superior services with excellent quality, 
              using a balanced mix of experience, knowledge, technology, innovation, and "smart" 
              work to the current and future business needs of our clients.
            </p>
          </div>

          <div className="partnership-section">
            <h2>Partnership Benefits</h2>
            <p>Having Partnership with DAV will provide you with:</p>
            <div className="benefits-grid">
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>Cost effective Quality work</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>Personalised and Dedicated Services</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>Timely follow-up procedures</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>Prompt, Quick and Scheduled services</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>Commitment towards Customer Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

