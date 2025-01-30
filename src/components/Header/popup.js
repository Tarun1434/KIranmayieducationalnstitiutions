import React, {useState} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'

const ReactPopUp = ({closePopup}) => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    school: '',
    tenthMarks: '',
    course: '', // Stores "Intermediate" or "Degree"
  })

  const handleChange = e => {
    const {name, value} = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    // Send data to Google Sheets
    fetch(
      'https://script.google.com/macros/s/AKfycbw2N0f5G97BM3tKfLJo3maKUUFswiwlWthbvL8pBwxyZWkS-821zIQ8kMKgZczserMO/exec',
      {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams({
          name: formData.name,
          phoneNumber: formData.phoneNumber,
          address: formData.address,
          school: formData.school,
          tenthMarks: formData.tenthMarks,
          course: formData.course,
        }).toString(),
      },
    )
      .then(response => response.text())
      .then(data => {
        alert('Student details submitted successfully!')
        closePopup() // Close the popup after form submission
      })
      .catch(error => {
        console.error('Error:', error)
        alert('There was an error submitting the form.')
      })
  }

  return (
    <Popup
      open={true}
      modal
      closeOnDocumentClick
      onClose={closePopup}
      contentStyle={{
        maxWidth: '500px',
        width: '90%',
        maxHeight: '100vh', 
        overflowY: 'auto', 
        padding: '20px',
        background: '#FDFDD2',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      }}
      overlayStyle={{
        background: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <div className='formm'>
        <h3 className='text-center text-black'>Admission Form</h3>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='phoneNumber' className='form-label'>
              Phone Number
            </label>
            <input
              type='tel'
              className='form-control'
              id='phoneNumber'
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='address' className='form-label'>
              Address
            </label>
            <input
              type='text'
              className='form-control'
              id='address'
              name='address'
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
           
            <div className='mb-3'>
            <label className='form-label'>Preferred Course</label>
            <div>
              <div className='form-check'>
                <input
                  type='radio'
                  className='form-check-input'
                  id='intermediate'
                  name='course'
                  value='Intermediate'
                  checked={formData.course === 'Intermediate'}
                  onChange={handleChange}
                  required
                />
                <label className='form-check-label' htmlFor='intermediate'>
                  Intermediate
                </label>
              </div>
              <div className='form-check'>
                <input
                  type='radio'
                  className='form-check-input'
                  id='degree'
                  name='course'
                  value='Degree'
                  checked={formData.course === 'Degree'}
                  onChange={handleChange}
                  required
                />
                <label className='form-check-label' htmlFor='degree'>
                  Degree
                </label>
              </div>
            </div>
          </div>

          <div className='mb-3'>
            <label htmlFor='school' className='form-label'>
              Previous School
            </label>
            <input
              type='text'
              className='form-control'
              id='school'
              name='school'
              value={formData.school}
              onChange={handleChange}
              required
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='tenthMarks' className='form-label'>
              10th Marks
            </label>
            <input
              type='number'
              className='form-control'
              id='tenthMarks'
              name='tenthMarks'
              value={formData.tenthMarks}
              onChange={handleChange}
              required
            />
          </div>

          

          <div className='d-flex justify-content-between'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
            <button
              type='button'
              className='btn btn-secondary'
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </Popup>
  )
}

export default ReactPopUp
