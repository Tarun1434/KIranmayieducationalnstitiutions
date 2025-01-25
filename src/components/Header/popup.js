import React, {useState} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css' // Ensure you have this import
import './index.css' // Custom CSS for the popup

const ReactPopUp = ({closePopup}) => {
  const [formData, setFormData] = useState({
    name: '',
    school: '',
    phoneNumber: '',
    tenthMarks: '',
    isIntermediate: false,
    isDegree: false,
  })

  const handleChange = e => {
    const {name, value, type, checked} = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Form Data Submitted:', formData)
    closePopup() // Close the popup after form submission
  }

  return (
    <Popup
      open={true}
      modal
      closeOnDocumentClick
      onClose={closePopup}
      contentStyle={{
        maxWidth: '500px', // Set the max width of the popup
        width: '80%', // Width as a percentage of the screen
        padding: '20px',
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      }}
      overlayStyle={{
        background: 'rgba(0, 0, 0, 0.5)', // Dim the background when popup is active
      }}
    >
      <div className="formm">
        <h3 className='text-center'>React Admission Form</h3>
        <form onSubmit={handleSubmit}>
          <div className='mb-5'>
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
            <label className='form-label'>Intermediate or Degree</label>
            <div>
              <div className='form-check form-check-inline'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id='intermediate'
                  name='isIntermediate'
                  checked={formData.isIntermediate}
                  onChange={handleChange}
                />
                <label className='form-check-label' htmlFor='intermediate'>
                  Intermediate
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id='degree'
                  name='isDegree'
                  checked={formData.isDegree}
                  onChange={handleChange}
                />
                <label className='form-check-label' htmlFor='degree'>
                  Degree
                </label>
              </div>
            </div>
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
