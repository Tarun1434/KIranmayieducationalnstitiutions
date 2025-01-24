import React from 'react'
import './index.css'
import Header from '../Header'
function Departments() {
  const departments = [
    'Computer Science',
    'Mechanical Engineering',
    'Civil Engineering',
    'Electronics',
  ]

  return (
    <>
      <Header />
      <div className='departments'>
        <h2>Our Departments</h2>
        <ul>
          {departments.map((dept, index) => (
            <li key={index}>{dept}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Departments
