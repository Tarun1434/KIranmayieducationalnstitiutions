import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import ReactPopUp from './popup'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function NewHeader() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const openPopup = () => {
    setIsPopupOpen(true)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
  }

  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
          <Link to='/' className='navbar-brand'>
            <img
              src='https://res.cloudinary.com/dsnjnciud/image/upload/e_background_removal/f_png/v1749954895/Picsart_25-06-14_21-15-25-469_temo6d.jpg'
              height='80'
              alt='LOGO'
              className='d-inline-block align-text-top me-2'
            />
            <div className='names_of_college'>
              <span className='college_name'>KIRANMAYI</span>
              <span className='college_educationaL'>
                EDUCATIONAL INSTITUTIONS
              </span>
              <span className='collge_name_I_D'>INTERMEDIATE & DEGREE</span>
            </div>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <Link to='/' className='nav-link'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/about' className='nav-link'>
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/departments' className='nav-link'>
                  Departments
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/courses' className='nav-link'>
                  Courses
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/management' className='nav-link'>
                  Management
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/gallery' className='nav-link'>
                  Gallery
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/contact' className='nav-link'>
                  Contact
                </Link>
              </li>
              <li className='nav-item'>
                <p
                  className='btn btn-primary'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarNav'
                  onClick={openPopup}
                >
                  ADMISSION
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isPopupOpen && <ReactPopUp closePopup={closePopup} />}
    </header>
  )
}

export default NewHeader
