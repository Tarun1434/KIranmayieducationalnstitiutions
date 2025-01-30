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
        <div className='courses_offered d-flex flex-column justify-content-center align-items-center'>
          <div className='for_intermediate'>
            <h1 className='facilities-heading'>FACILITIES</h1>
            <div className='facilities-cards d-flex flex-column flex-md-row'>
              <div className='facility-card'>
                <img
                  src='https://res.cloudinary.com/dsnjnciud/image/upload/v1737897280/33E486F5F3B7E76C95CC9DC962D1AB7D_uwaka5.jpg'
                  className='facility-img'
                  alt='...'
                />
                <div className='facility-body text-black'>
                  <p className='facility-text'>PHYSICS LABRATORY</p>
                </div>
              </div>
              <div className='facility-card'>
                <img
                  src='https://res.cloudinary.com/dsnjnciud/image/upload/v1737897306/this-is-what-we-are-testing-today-biology-lesson-science-experiments-in-bilogy-laboratory-little-girls-in-school-lab-biology-education-little-scientist-work-with-microscope-chemistry-research-2B8M3YN_lujeup.jpg'
                  className='facility-img'
                  alt='...'
                />
                <div className='facility-body text-black'>
                  <p className='facility-text'>CHEMICAL LABRATORY</p>
                </div>
              </div>
              <div className='facility-card'>
                <img
                  src='https://res.cloudinary.com/dsnjnciud/image/upload/v1737898660/stock-chart-rising-upward_u2vasf.jpg'
                  className='facility-img'
                  alt='...'
                />
                <div className='facility-body text-black'>
                  <p className='facility-text'>COMPUTER LABRATORY</p>
                </div>
              </div>
              <div className='facility-card'>
                <img
                  src='https://res.cloudinary.com/dsnjnciud/image/upload/v1737959696/seidenberg-article-hero-computer-science-degree_gi5ubo.jpg'
                  className='facility-img'
                  alt='...'
                />
                <div className='facility-body text-black text-center'>
                  <p className='facility-text'>LIBRARY</p>
                </div>
              </div>
              <div className='facility-card'>
                <img
                  src='https://res.cloudinary.com/dsnjnciud/image/upload/v1737959768/indian-school-chemistry-lab-research-students-working-class-together-KX38BN_e3k4rk.jpg'
                  className='facility-img'
                  alt='...'
                />
                <div className='facility-body text-black text-center'>
                  <p className='facility-text'>DIGITAL CLASSES</p>
                </div>
              </div>
              <div className='facility-card'>
                <img
                  src='https://res.cloudinary.com/dsnjnciud/image/upload/v1737959740/asian-college-student-working-on-botany_cfur7j.jpg'
                  className='facility-img'
                  alt='...'
                />
                <div className='facility-body text-black text-center'>
                  <p className='facility-text'>SPORTS GROUND</p>
                </div>
              </div>

              <div className='facility-card'>
                <img
                  src='https://res.cloudinary.com/dsnjnciud/image/upload/v1737960807/Rectangle-1783_lxz3ve.png'
                  className='facility-img'
                  alt='...'
                />
                <div className='facility-body text-black text-center'>
                  <p className='facility-text'>ACHEIVEMENTS</p>
                </div>
              </div>
              <div className='facility-card'>
                <img
                  src='https://res.cloudinary.com/dsnjnciud/image/upload/v1737961005/graduates-in-mortar-boards-with-diplomas-RDM3AA_auklqc.jpg'
                  className='facility-img'
                  alt='...'
                />
                <div className='facility-body text-black text-center'>
                  <p className='facility-text'>CULTURAL ACTIVITIES</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container text-center mt-4'>
          <hr id='five' />
        </div>
        <CourseOffered />
      </div>

      <Footer />
    </>
  )
}

export default Departments
