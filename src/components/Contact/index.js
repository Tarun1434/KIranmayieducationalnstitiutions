import React, {useState, useEffect} from 'react'
import './index.css'
import Header from '../Header'
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submittedData, setSubmittedData] = useState([])

  // Load feedback from local storage when the component mounts
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('feedbacks'))
    if (storedData) {
      setSubmittedData(storedData)
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

    // Capture the current date and time
    const timestamp = new Date().toLocaleString()

    // Store the form data along with the timestamp
    const newSubmission = {...formData, timestamp}

    // Update state and store feedback in local storage
    const updatedData = [newSubmission, ...submittedData]
    setSubmittedData(updatedData)

    // Save the feedback data in local storage
    localStorage.setItem('feedbacks', JSON.stringify(updatedData))

    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <>
      <Header />
      <div className='contact'>
        <h2>Contact Us</h2>
        <div className='contact-info'>
          <p>
            <strong>Address:</strong> XYZ College, Main Street, City, Country
          </p>
          <p>
            <strong>Phone:</strong> +123 456 789
          </p>
          <p>
            <strong>Email:</strong> contact@xyzcollege.com
          </p>
        </div>

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
          <h3>Recent Feedback:</h3>
          {submittedData.map((feedback, index) => (
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
              <hr />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Contact
