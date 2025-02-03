import React, {useState, useEffect} from 'react'
import './index.css'
import Header from '../Header'
import {MdWifiCalling} from 'react-icons/md'
import Marqueetag from '../Marqueetag'
import Footer from '../Footer'
import {FaLocationDot} from 'react-icons/fa6'
import {IoMailSharp} from 'react-icons/io5'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submittedData, setSubmittedData] = useState([])
  const [currentUserEmail, setCurrentUserEmail] = useState('')

  // Load feedback from local storage when the component mounts
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('feedbacks'))
    if (storedData) {
      setSubmittedData(storedData)
    }

    // Load the current user's email from local storage
    const storedUserEmail = localStorage.getItem('currentUserEmail')
    if (storedUserEmail) {
      setCurrentUserEmail(storedUserEmail)
    }
  }, [])

  // Handle form input changes
  const handleInputChange = e => {
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault()

    if (!formData.email) {
      alert('Please enter your email to submit feedback.')
      return
    }

    // Capture the current date and time
    const timestamp = new Date().toLocaleString()

    // Store the form data along with the timestamp
    const newSubmission = {...formData, timestamp}

    // Update state and store feedback in local storage
    const updatedData = [newSubmission, ...submittedData]
    setSubmittedData(updatedData)
    localStorage.setItem('feedbacks', JSON.stringify(updatedData))

    // Store the current user's email in local storage
    localStorage.setItem('currentUserEmail', formData.email)
    setCurrentUserEmail(formData.email)

    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  // Handle individual feedback deletion (Only allow the user to delete their own feedback)
  const handleDeleteFeedback = (index, feedbackEmail) => {
    if (feedbackEmail !== currentUserEmail) {
      alert('You can only delete your own feedback.')
      return
    }

    const updatedData = submittedData.filter((_, i) => i !== index)
    setSubmittedData(updatedData)
    localStorage.setItem('feedbacks', JSON.stringify(updatedData))
  }

  return (
    <>
      <Header />
      <Marqueetag />
      <div className='contact'>
        <h1 className='facilities-heading'>FACILITIES</h1>
        <div className='contact-info'>
          <div>
            <MdWifiCalling size={100} className='symbol_contact' />
            <p> Land Line: 0866-248 48 18, 248 48 16, </p>
            <p> Mobile: +91 99124 25999, 91214 25999, 9121693459</p>
          </div>
          <div>
            <FaLocationDot size={100} className='symbol_contact' />
            <p>
              Kiranmayi Degree College, Pathapatnam - 532213, Srikakulam
              District, Andhra Pradesh, India
            </p>
          </div>
          <div>
            <IoMailSharp size={100} className='symbol_contact' />
            <p> kiranmayidegreecollege@gmail.com </p>
          </div>
        </div>

        <h2>Feedback</h2>
        <form className='contact-form' onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            value={formData.name}
            placeholder='Your Name'
            required
            onChange={handleInputChange}
          />
          <input
            type='email'
            name='email'
            value={formData.email}
            placeholder='Your Email'
            required
            onChange={handleInputChange}
          />
          <textarea
            name='message'
            value={formData.message}
            placeholder='Your Message'
            rows='5'
            required
            onChange={handleInputChange}
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>

        <div className='feedback-section'>
          <h3 className='text-black'>Recent Feedback:</h3>
          {submittedData.length > 0 ? (
            submittedData.map((feedback, index) => (
              <div className='feedback' key={index}>
                <p>
                  <strong>Name:</strong> {feedback.name}
                </p>
                <p>
                  <strong>Email:</strong> {feedback.email}
                </p>
                <p>
                  <strong>Message:</strong> {feedback.message}
                </p>
                <p>
                  <strong>Submitted at:</strong> {feedback.timestamp}
                </p>
                {feedback.email === currentUserEmail && (
                  <button
                    onClick={() => handleDeleteFeedback(index, feedback.email)}
                    className='btn btn-danger'
                  >
                    Delete
                  </button>
                )}
                <hr />
              </div>
            ))
          ) : (
            <p>No feedback available.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
