import React from 'react'
import './index.css'
import Header from '../Header'
function About() {
  return (
    <>
      <Header />
      <div className='about'>
        <h2>About XYZ College</h2>
        <p>
          XYZ College was founded in 2000 and is committed to excellence in
          education, research, and innovation.
        </p>
        <h3>Mission</h3>
        <p>
          To empower students with knowledge and skills to excel in their
          careers.
        </p>
        <h3>Vision</h3>
        <p>To be a globally recognized institution of higher learning.</p>
      </div>
    </>
  )
}

export default About
