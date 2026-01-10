import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear status message when user starts typing
    if (submitStatus.message) {
      setSubmitStatus({ type: '', message: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })

    // Check if EmailJS is configured
    const serviceId = 'YOUR_SERVICE_ID'  // Replace with your EmailJS service ID from https://www.emailjs.com/
    const templateId = 'YOUR_TEMPLATE_ID'  // Replace with your EmailJS template ID
    const publicKey = 'YOUR_PUBLIC_KEY'  // Replace with your EmailJS public key

    // If EmailJS is not configured, use mailto fallback
    if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
      // Fallback to mailto if EmailJS is not configured
      const mailtoLink = `mailto:davengg123@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\n\nMessage:\n${formData.message}`)}`
      window.location.href = mailtoLink
      
      setSubmitStatus({
        type: 'info',
        message: 'Opening your email client... If it doesn\'t open, please email us directly at davengg123@gmail.com'
      })
      
      setIsSubmitting(false)
      return
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        subject: formData.subject,
        message: formData.message,
        to_email: 'davengg123@gmail.com',
        reply_to: formData.email, // Allows you to reply directly
      }

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      // Success
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We will get back to you soon.'
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })

      // Clear success message after 8 seconds
      setTimeout(() => {
        setSubmitStatus({ type: '', message: '' })
      }, 8000)

    } catch (error) {
      console.error('EmailJS Error:', error)
      
      // Fallback to mailto if EmailJS fails
      const mailtoLink = `mailto:davengg123@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\n\nMessage:\n${formData.message}`)}`
      window.location.href = mailtoLink
      
      setSubmitStatus({
        type: 'info',
        message: 'Opening your email client as fallback... If it doesn\'t open, please email us directly at davengg123@gmail.com'
      })
    } finally {
      setIsSubmitting(false)
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

            <div className="contact-form-container">
              <h2>Send us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Enter message subject"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus.message && (
                  <div className={`submit-status ${submitStatus.type}`}>
                    {submitStatus.message}
                  </div>
                )}

                <div className="form-note">
                  <p>
                    <strong>Note:</strong> Currently using email client fallback. To enable direct email sending, 
                    please configure EmailJS (see EMAIL_SETUP.md). Emails will be sent to: 
                    <a href="mailto:davengg123@gmail.com">davengg123@gmail.com</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

