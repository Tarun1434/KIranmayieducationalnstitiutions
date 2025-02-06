import React from 'react'
import './index.css'
import Header from '../Header'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'
import 'animate.css/animate.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Footer from '../Footer'
import Marqueetag from '../Marqueetag'

export function CourseOffered() {
  const course_details = {
    intermediate: [
      {
        id: 1,
        card_image:
          'https://res.cloudinary.com/dsnjnciud/image/upload/v1737897280/33E486F5F3B7E76C95CC9DC962D1AB7D_uwaka5.jpg',
        card_text: '"M.P.C" (MATHS ,PHYSICS ,CHEMISTRY)',
      },
      {
        id: 2,
        card_image:
          'https://res.cloudinary.com/dsnjnciud/image/upload/v1737897306/this-is-what-we-are-testing-today-biology-lesson-science-experiments-in-bilogy-laboratory-little-girls-in-school-lab-biology-education-little-scientist-work-with-microscope-chemistry-research-2B8M3YN_lujeup.jpg',
        card_text: '"Bi.P.C" (BIOLOGY ,PHYSICS ,CHEMISTRY)',
      },
      {
        id: 3,
        card_image:
          'https://res.cloudinary.com/dsnjnciud/image/upload/v1737898660/stock-chart-rising-upward_u2vasf.jpg',
        card_text: '"H.E.C" (HISTORY, ECONOMICS, CIVICS)',
      },
    ],
    degree: [
      {
        id: 1,
        card_image:
          'https://res.cloudinary.com/dsnjnciud/image/upload/v1737959696/seidenberg-article-hero-computer-science-degree_gi5ubo.jpg',
        card_text: 'B.Sc - MPCs',
        sub_text: '(Maths, Physics, Computers)',
      },
      {
        id: 2,
        card_image:
          'https://res.cloudinary.com/dsnjnciud/image/upload/v1737959768/indian-school-chemistry-lab-research-students-working-class-together-KX38BN_e3k4rk.jpg',
        card_text: 'B.Sc - MPC',
        sub_text: '(Maths, Physics, Chemistry)',
      },
      {
        id: 3,
        card_image:
          'https://res.cloudinary.com/dsnjnciud/image/upload/v1737959740/asian-college-student-working-on-botany_cfur7j.jpg',
        card_text: 'B.Sc - CBZ',
        sub_text: '(Chemistry, Botany, Zoology)',
      },
      {
        id: 4,
        card_image:
          'https://res.cloudinary.com/dsnjnciud/image/upload/v1737960807/Rectangle-1783_lxz3ve.png',
        card_text: 'B.Com',
        sub_text: 'Computers',
      },
      {
        id: 5,
        card_image:
          'https://res.cloudinary.com/dsnjnciud/image/upload/v1737961005/graduates-in-mortar-boards-with-diplomas-RDM3AA_auklqc.jpg',
        card_text: 'BA',
        sub_text: 'Political Science',
      },
    ],
  }

  return (
    <div className='courses_offered d-flex flex-column justify-content-center align-items-center'>
      <div className='for_intermediate'>
        <h1 className='InterMeduiate'>Intermediate</h1>
        <div className='card_ss d-flex flex-column flex-md-row'>
          {course_details.intermediate.map(cards => (
            <div className='card' key={cards.id}>
              <NavLink to={`/departments#intermediate-${cards.id}`}>
                <img src={cards.card_image} className='card-img-top' alt='...' />
                <div className='card_body text-black'>
                  <p className='card-text'>{cards.card_text}</p>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>

      <div className='for_Degree d-flex flex-column justify-content-center align-items-center'>
        <h1 className='InterMeduiate'>Degree</h1>
        <div className='card_ss d-flex flex-column flex-md-row'>
          {course_details.degree.map(cards => (
            <div className='card' key={cards.id}>
              <NavLink to={`/departments#degree-${cards.id}`}>
                <img src={cards.card_image} className='card-img-top' alt='...' />
                <div className='card_body text-black text-center'>
                  <p className='card-text'>{cards.card_text}</p>
                  {cards.sub_text && (
                    <span className='card-text'>{cards.sub_text}</span>
                  )}
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

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

        <div className='Our_academics'>
          <h1 className='acdamics_heading'>Our Academics</h1>
          <h2 className='acdamics_caption'>"Dream, learn, achieve."</h2>
          <div className='d-flex flex-md-row flex-column justify-content-center'>
            <div className='acdmics_image'>
              <img
                src='https://res.cloudinary.com/dsnjnciud/image/upload/v1738819779/92557746_lrthit.jpg'
                alt='...'
                className='acdamics_image'
              />
              <p className='text_upon_the_image'>Intermediate</p>
              <p className='text_after_the_hover'>See More</p>
            </div>
            <div className='acdmics_image'>
              <img
                src='https://res.cloudinary.com/dsnjnciud/image/upload/v1738819736/the-hidden-benefits-of-earning-a-college-degree_momrww.jpg'
                alt='...'
                className='acdamics_image'
              />
              <p className='text_upon_the_image'>Degree</p>
              <p className='text_after_the_hover'>See More</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
