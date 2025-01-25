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

      <div className='row align-items-center g-4'>
        {/* Mission & Vision Section */}

        {/* Carousel Section */}
        <div className='col-12'>
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

      <div className='mission_vison d-flex flex-column text-white'>
        <h1 className='heading_vison'>VISION & MISSION</h1>
        <div className='misonvisonconatiner d-flex flex-column flex-md-row justify-content-center '>
          <div className='photos'>
            <div className='d-flex flex-column justify-content-center'>
              <img
                src='https://res.cloudinary.com/dsnjnciud/image/upload/v1737720659/importance-of-mission-and-vision-17006585731_vjfagy.png'
                alt='mission and vision'
                className='misvis'
              />
              <img
                src='https://res.cloudinary.com/dsnjnciud/image/upload/v1737720659/mission_vision_values_xs2era.jpg'
                alt='mission and vision'
                className='misvis'
              />
            </div>
          </div>
          <div className='paragraph d-flex flex-column justify-content-center'>
            <div className='sec'>
              <h1 className='missionheading'>Vision</h1>
              <p className='missionparagraph'>
                Kiiranmyi Degree College in its pursuits and excellence provides
                a well-balanced quality education for students in construction
                of mind that explores creativity, innovation with multiple
                perspective intellectuality, morality and spirituality through
                committed and distinction in teaching and service to society.
              </p>
            </div>
            <div className='sec'>
              <h1 className='missionheading'>Mission</h1>
              <p className='missionparagraph'>
                To achieve the founding objective of the trust to impart quality
                education to all streams, all sections of the society by
                imbibing excellence in every aspect of teaching and learning.
              </p>
            </div>
            <div className='sec'>
              <h1 className='missionheading'>Mission</h1>
              <ul className='missionparagraph'>
                <li>Imparting value based education.</li>
                <li>
                  Achieving excellence in curricular and co-curricular
                  activities.
                </li>
                <li>Stimulating Technology based education among students.</li>
                <li>Inculcating research culture among Staffs & Students.</li>
                <li>Making students socially responsible citizens.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
