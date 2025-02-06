import React from 'react'
import './index.css'
import './index.scss'
import Header from '../Header'
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Carousel} from 'react-bootstrap'
import 'animate.css/animate.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Footer from '../Footer'
import Marqueetag from '../Marqueetag'

function Home() {
  return (
    <>
      <Header />
      <Marqueetag />
      <div className='backgroundimage container-fluid px-0'>
        {/* Carousel Section */}
        <div className='row align-items-center'>
          <div className=''>
            <div className='border border-secondary rounded overflow-hidden shadow'>
              <Carousel
                interval={2000}
                controls={false}
                indicators={false}
                pause={true}
              >
                <Carousel.Item>
                  <img
                    className='d-block w-100 animate__flipInY img_carosuel'
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
                    className='d-block w-100 animate__fadeIn img_carosuel'
                    src='https://res.cloudinary.com/dsnjnciud/image/upload/v1737631913/Boost-Your-Career-with-a-Bachelors-Degree.FNU_-scaled-1.jpg_uh4cxw.webp'
                    alt='Slide 3'
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>

        {/* Infrastructure Section */}
        <div className='infrastuctre'>
          <div className='d-flex flex-column flex-md-row justify-content-center'>
            <NavLink to='/departments'>
              <div className='simlarcards'>
                <img
                  src='https://res.cloudinary.com/dsnjnciud/image/upload/v1737788718/university-robotics-lecture-black-teacher-explain-engineering-to-students-she-uses_u0rmji.jpg'
                  className='infa_img'
                  alt='infrastructure'
                />
                <div className='text_content_infra'>
                  <h1 className='heading_infra'>Infrastructure</h1>
                </div>
              </div>
            </NavLink>
            <NavLink to='/management'>
              <div className='simlarcards'>
                <img
                  src='https://res.cloudinary.com/dsnjnciud/image/upload/v1737788875/technology-in-education_u0qi6t.jpg'
                  className='infa_img'
                  alt='infrastructure'
                />
                <div className='text_content_infra'>
                  <h1 className='heading_infra'>Qualified Faculty</h1>
                </div>
              </div>
            </NavLink>
            <div className='simlarcards'>
              <img
                src='https://res.cloudinary.com/dsnjnciud/image/upload/v1737788718/teacher-explaining-science-concept-class_768772-1200_pufx0j.jpg'
                className='infa_img'
                alt='infrastructure'
              />
              <div className='text_content_infra'>
                <h1 className='heading_infra'>100% Learning</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className='mission_vison d-flex flex-column text-black'>
          <h1 className='heading_vison'>VISION & MISSION</h1>
          <div className='misonvisonconatiner d-flex flex-column flex-md-row justify-content-center'>
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
                  Kiranmayi Degree College in its pursuits and excellence
                  provides a well-balanced quality education for students in
                  construction of mind that explores creativity, innovation with
                  multiple perspective intellectuality, morality and
                  spirituality through committed and distinction in teaching and
                  service to society.
                </p>
              </div>
              <div className='sec'>
                <h1 className='missionheading'>Mission</h1>
                <p className='missionparagraph'>
                  To achieve the founding objective of the trust to impart
                  quality education to all streams, all sections of the society
                  by imbibing excellence in every aspect of teaching and
                  learning.
                </p>
              </div>
              <div className='sec'>
                <h1 className='missionheading'>Mission</h1>
                <ul className='missionparagraph'>
                  <li>Imparting value-based education.</li>
                  <li>
                    Achieving excellence in curricular and co-curricular
                    activities.
                  </li>
                  <li>
                    Imparting social, moral and spiritual education for the
                    overall development of students.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Our Academics*/}
        <div className='Our_academics'>
          <h1 className='acdamics_heading'>Our Academics</h1>
          <h2 className='acdamics_caption'>"Dream, learn, achieve."</h2>
          <div className='d-flex flex-md-row flex-column justify-content-center'>
            <NavLink to='/courses'>
              <div className='acdmics_image'>
                <img
                  src='https://res.cloudinary.com/dsnjnciud/image/upload/v1738819779/92557746_lrthit.jpg'
                  alt='...'
                  className='acdamics_image'
                />
                <p className='text_upon_the_image'>Intermediate</p>
                <p className='text_after_the_hover'>See More</p>
              </div>
            </NavLink>
            <NavLink to='/courses'>
              <div className='acdmics_image'>
                <img
                  src='https://res.cloudinary.com/dsnjnciud/image/upload/v1738819736/the-hidden-benefits-of-earning-a-college-degree_momrww.jpg'
                  alt='...'
                  className='acdamics_image'
                />
                <p className='text_upon_the_image'>Degree</p>
                <p className='text_after_the_hover'>See More</p>
              </div>
            </NavLink>
          </div>
        </div>

        {/* Origin and history */}
        <div className='origin_and_history'>
          <div className='images'>
            <img
              class='framed'
              src='https://res.cloudinary.com/dsnjnciud/image/upload/v1737631716/kinamyi_image_clvgdt.jpg'
              alt='randomimage'
            />
          </div>
          <div className='origin_text'>
            <h3 className='headin_o'>ORIGIN AND HISTORY</h3>
            <h1 className='headingss'>
              Andhra Loyola College is a Jesuit College in Vijayawada, the
              second biggest city in Andhra Pradesh.{' '}
            </h1>
            <p className='para_o'>
              ALC is the realization of the long cherished dreams of the Telugu
              people, in general, and the Telugu Catholics, in particular, for a
              Jesuit College as the first Telugu Catholics owe their Catholic
              Faith to the Jesuit Missionaries of Carnatic Mission of the early
              18th Century.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
