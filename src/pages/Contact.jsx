import React, { useState } from 'react'
import './Contact.css'

function Contact() {
  const [messageText, setMessageText] = useState('')
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `To: davengg123@gmail.com\n\n${messageText}`
      )
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch (err) {
      console.error('Clipboard write failed', err)
      setCopied(false)
    }
  }

  return (
    <div className="contact">
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with DAV Engineering Services</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                We'd love to hear from you. Send us a message and we'll respond 
                as soon as possible.
              </p>

              <div className="info-section">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-details">
                    <h3>Office Address</h3>
                    <p>
                      H.O. No. 38/39, 1st Floor<br />
                      Corammendal Towns SIDCO Industrial Estate<br />
                      Ambattur-Chennai-53
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📱</div>
                  <div className="info-details">
                    <h3>Phone Numbers</h3>
                    <p>
                      <a href="tel:+916385222170">+91-6385222170</a><br />
                      <a href="tel:+919789048001">+91-9789048001</a>
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div className="info-details">
                    <h3>Email Address</h3>
                    <p>
                      <a href="mailto:davengg123@gmail.com">davengg123@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">👤</div>
                  <div className="info-details">
                    <h3>CEO</h3>
                    <p>
                      D. KARTHIKEYAN<br />
                      DAV ENGINEERING SERVICES
                    </p>
                  </div>
                </div>
              </div>

              <div className="business-hours">
                <h3>Business Hours</h3>
                <p>
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 1:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Message container removed per request */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

