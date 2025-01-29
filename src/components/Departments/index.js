import React from 'react'
import './index.css'
import Header from '../Header'
import Marqueetag from '../Marqueetag'
import Footer from '../Footer'
import {CourseOffered} from '../Home'
function Departments() {
  return (
    <>
      <Header />
      <Marqueetag />
      <div className='departments'>
        <CourseOffered />
      </div>
      <Footer />
    </>
  )
}

export default Departments
