import React, { useState } from 'react'
import './index.css'
import Header from '../Header'
import { MdWifiCalling } from 'react-icons/md'
import Marqueetag from '../Marqueetag'
import Footer from '../Footer'
import { FaLocationDot } from 'react-icons/fa6'
import { IoMailSharp } from 'react-icons/io5'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSuccessMessage('')

    // Capture the current date and time
    const timestamp = new Date().toLocaleString()
    const newSubmission = { ...formData, timestamp }

    // Send data to Google Sheets via Google Apps Script Web App
    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbw48Etz7Lloz1yK1i0LcR7CN3JxZZFeitvsZcROzP71tDI5B_8PIYhKvLHPbNqRbrEkKw/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newSubmission),
        }
      )

      // Show success message
      setSuccessMessage('Feedback submitted successfully!')

      // Reset the form after submission
      setFormData({ name: '', message: '' })
    } catch (error) {
      console.error('Error submitting data:', error)
      setSuccessMessage('Failed to submit feedback. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <Marqueetag />
      <div className="contact">
        <h1 className="facilities-heading">FACILITIES</h1>
        <div className="contact-info">
          <div>
            <MdWifiCalling size={100} className="symbol_contact" />
            <p> Land Line: 0866-248 48 18, 248 48 16, </p>
            <p> Mobile: +91 99124 25999, 91214 25999, 9121693459</p>
          </div>
          <div>
            <FaLocationDot size={100} className="symbol_contact" />
            <p>
              Kiranmayi Degree College, Pathapatnam - 532213, Srikakulam
              District, Andhra Pradesh, India
            </p>
          </div>
          <div>
            <IoMailSharp size={100} className="symbol_contact" />
            <p> kiranmayidegreecollege@gmail.com </p>
          </div>
        </div>

        <h2>Feedback</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Your Name"
            required
            onChange={handleInputChange}
          />
          <textarea
            name="message"
            value={formData.message}
            placeholder="Your Message"
            rows="5"
            required
            onChange={handleInputChange}
          ></textarea>
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>

        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
      <Footer />
    </>
  )
}

export default Contact
