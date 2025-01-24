import React from 'react'
import './index.css'
import Header from '../Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Carousel} from 'react-bootstrap'
import Marquee from 'react-smooth-marquee'

function Home() {
  return (
    <>
      <Header />
      <div className='marqueetag py-2'>
        <Marquee speed={1}>
          <span>
            🌟 Welcome to Our College Website! 🌟 Admission Open for 2025 Batch!
            &nbsp;|&nbsp; 🌟 Welcome to the KIRANMAYI EDUCATION INSTITUTE
            INTERMEDIATE & DEGREE 🌟 &nbsp;|&nbsp; 📚 Learn and Grow with Us 📚
          </span>
        </Marquee>
      </div>

      <div className='container my-4'>
        <div className='row align-items-center g-4'>
          {/* Mission & Vision Section */}
          <div className='col-12 col-md-5'>
            <div className='p-4 bg-light border border-secondary rounded shadow'>
              <h1 className='h4 text-dark mb-3'>MISSION & VISION</h1>
              <p className='text-secondary mb-0'>
                Our mission is to empower students with knowledge, innovation,
                and skills to achieve excellence and make meaningful
                contributions to society. Our vision is to become a leading
                institution recognized for academic excellence and societal
                impact.
              </p>
            </div>
          </div>

          {/* Carousel Section */}
          <div className='col-12 col-md-7'>
            <div className='border border-secondary rounded overflow-hidden shadow'>
              <Carousel
                interval={1000}
                controls={false}
                indicators={false}
                pause={false}
              >
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src='https://res.cloudinary.com/dsnjnciud/image/upload/v1737631715/kira2_w9kupm.jpg'
                    alt='Slide 1'
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src='https://res.cloudinary.com/dsnjnciud/image/upload/v1737631716/kinamyi_image_clvgdt.jpg'
                    alt='Slide 2'
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src='https://res.cloudinary.com/dsnjnciud/image/upload/v1737631913/Boost-Your-Career-with-a-Bachelors-Degree.FNU_-scaled-1.jpg_uh4cxw.webp'
                    alt='Slide 3'
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
