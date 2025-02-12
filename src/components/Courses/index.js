import React from 'react'
import './index.css'
import Header from '../Header'
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Footer from '../Footer'
import Marqueetag from '../Marqueetag'

function CourseOffered() {
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
    <>
      <Header />
      <Marqueetag />
      <div className='courses_offered d-flex flex-column justify-content-center align-items-center'>
        <h1 className='Courses'>Courses</h1>
        <div className='for_intermediate'>
          <h1 className='InterMeduiate'>Intermediate</h1>
          <div className='card_ss d-flex flex-column flex-md-row'>
            {course_details.intermediate.map(cards => (
              <div className='card' key={cards.id}>
                <NavLink to={`/departments#intermediate-${cards.id}`}>
                  <img
                    src={cards.card_image}
                    className='card-img-top'
                    alt='...'
                  />
                  <div className='card_body text-black'>
                    <p className='card-text'>{cards.card_text}</p>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>

        <div className='container text-center mt-4'>
          <hr id='five' />
        </div>

        <div className='for_Degree d-flex flex-column justify-content-center align-items-center'>
          <div className='for_intermediate'>
            <h1 className='InterMeduiate'>Degree</h1>
            <div className='card_ss d-flex flex-column flex-md-row'>
              {course_details.degree.map(cards => (
                <div className='card' key={cards.id}>
                  <NavLink to={`/departments#degree-${cards.id}`}>
                    <img
                      src={cards.card_image}
                      className='card-img-top'
                      alt='...'
                    />
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
      </div>
      <Footer />
    </>
  )
}

export default CourseOffered
