import React from 'react'
import './index.css'
import Header from '../Header'
import Marqueetag from '../Marqueetag'
import Footer from '../Footer'
function About() {
  return (
    <>
      <Header />
      <Marqueetag />
      <div className='about_section_'>
        <div className='ab d-flex align-items-center justify-content-center'>
          <div className='about d-flex flex-column  flex-md-row justify-content-center'>
            <h1 className='about-heading'>ABOUT</h1>
            <div className='about_section d-flex flex-column'>
              <h2 className='about_heading'>KIRANMAYI DEGREE COLLEGE</h2>
              <p className='para_about'>
                {' '}
                Kiranmayi Degree College was founded by Shri N. Tirupathi Rao
                garu, a distinguished academician and the pioneer of residential
                colleges, in 2001 at the educational hub of Pathapatnam. Since
                its inception, it has been dedicated to shaping the bright
                futures of its students with numerous achievements and
                accolades.
              </p>
            </div>
            <img
              className='d-block aboutclg'
              src='https://res.cloudinary.com/dsnjnciud/image/upload/v1737631716/kinamyi_image_clvgdt.jpg'
              alt='about college'
            />
          </div>
        </div>

        <div className='container text-center mt-4'>
          <hr id='five' />
        </div>

        <div className='ab d-flex align-items-center justify-content-center'>
          <div className='about flex-column flex-md-row justify-content-center'>
            <img
              className='d-block aboutclg'
              src='https://res.cloudinary.com/dsnjnciud/image/upload/v1737631716/kinamyi_image_clvgdt.jpg'
              alt='about college'
            />
            <div className='about_section d-flex flex-column'>
              <h2 className='about_heading'>FOUNDER's MESSEAGE</h2>
              <p className='para_about'>
                {' '}
                Kiranmayi Degree College was founded by Shri N. Tirupathi Rao
                garu, a distinguished academician and the pioneer of residential
                colleges, in 2001 at the educational hub of Pathapatnam. Since
                its inception, it has been dedicated to shaping the bright
                futures of its students with numerous achievements and
                accolades.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
