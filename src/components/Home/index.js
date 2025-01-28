import React from 'react'
import './index.css'
import Header from '../Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Carousel} from 'react-bootstrap'
import Marquee from 'react-smooth-marquee'
import 'animate.css/animate.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Footer from '../Footer'

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
        {/* Carousel Section */}
        <div className='col-12'>
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
              <Carousel.Item className=''>
                <img
                  className='d-block w-100'
                  src='https://res.cloudinary.com/dsnjnciud/image/upload/v1737631716/kinamyi_image_clvgdt.jpg'
                  alt='Slide 2'
                />
                <div className='carousel_text'>
                  <h3 className='carosel_head animate__headShake'>
                    Welcome To <br /> KIRANMAYI DEGREE COLLEGE
                  </h3>

                  <h5 className='carosel_para animate__heartBeat'>
                    INTERMEDIATE & DEGREE
                  </h5>
                </div>
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
      {/* infrastuctre*/}
      <div className='infrastuctre '>
        <div className='d-flex flex-column flex-md-row justify-content-center '>
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
      {/* Mission and vison */}
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

      {/* Courses Offered*/}

      <div className='courses_offered  d-flex  flex-column justify-content-center align-items-center'>
        <div className='for_intermediate'>
          <h1 className='InterMeduiate'>Intermediate </h1>
          <div className='card_ss d-flex flex-column flex-md-row'>
            <div className='card'>
              <img
                src='https://res.cloudinary.com/dsnjnciud/image/upload/v1737897280/33E486F5F3B7E76C95CC9DC962D1AB7D_uwaka5.jpg'
                className='card-img-top'
                alt='...'
              />
              <div className='card_body text-black'>
                <p className='card-text'>"M.P.C" (MATHS ,PHYSICS ,CHEMISTRY)</p>
              </div>
            </div>
            <div className='card'>
              <img
                src='https://res.cloudinary.com/dsnjnciud/image/upload/v1737897306/this-is-what-we-are-testing-today-biology-lesson-science-experiments-in-bilogy-laboratory-little-girls-in-school-lab-biology-education-little-scientist-work-with-microscope-chemistry-research-2B8M3YN_lujeup.jpg'
                className='card-img-top'
                alt='...'
              />
              <div className='card_body text-black'>
                <p className='card-text'>
                  "Bi.P.C" (BIOLOGY ,PHYSICS ,CHEMISTRY)
                </p>
              </div>
            </div>
            <div className='card'>
              <img
                src='https://res.cloudinary.com/dsnjnciud/image/upload/v1737898660/stock-chart-rising-upward_u2vasf.jpg'
                className='card-img-top'
                alt='...'
              />
              <div className='card_body text-black'>
                <p className='card-text'>
                  "H.E.C" (HISTORY, ECONOMICS, CIVICS)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='for_Degree d-flex  flex-column justify-content-center align-items-center'>
          <h1 className='InterMeduiate'>Degree </h1>
          <div className='card_ss d-flex flex-column flex-md-row'>
            <div className='card'>
              <img
                src='https://res.cloudinary.com/dsnjnciud/image/upload/v1737959696/seidenberg-article-hero-computer-science-degree_gi5ubo.jpg'
                className='card-img-top'
                alt='...'
              />
              <div className='card_body text-black text-center'>
                <p className='card-text'>B.Sc - MPCs</p>
                <span className='card-text'>(Maths, Phyics, Computers)</span>
              </div>
            </div>
            <div className='card'>
              <img
                src='https://res.cloudinary.com/dsnjnciud/image/upload/v1737959768/indian-school-chemistry-lab-research-students-working-class-together-KX38BN_e3k4rk.jpg'
                className='card-img-top'
                alt='...'
              />
              <div className='card_body text-black text-center'>
                <p className='card-text'>B.Sc - MPC</p>
                <span className='card-text'>(Maths, Phyics, Chemistry)</span>
              </div>
            </div>
            <div className='card'>
              <img
                src='https://res.cloudinary.com/dsnjnciud/image/upload/v1737959740/asian-college-student-working-on-botany_cfur7j.jpg'
                className='card-img-top'
                alt='...'
              />
              <div className='card_body text-black text-center'>
                <p className='card-text'>B.Sc - CBZ </p>
                <span className='card-text'>(Chemistry, Botany,Zoology)</span>
              </div>
            </div>

            <div className='card'>
              <img
                src='https://res.cloudinary.com/dsnjnciud/image/upload/v1737960807/Rectangle-1783_lxz3ve.png'
                className='card-img-top'
                alt='...'
              />

              <div className='card_body text-black text-center'>
                <p className='card-text'>B.Com </p>
                <span className='card-text'> Computers</span>
              </div>
            </div>
            <div className='card'>
              <img
                src='https://res.cloudinary.com/dsnjnciud/image/upload/v1737961005/graduates-in-mortar-boards-with-diplomas-RDM3AA_auklqc.jpg'
                className='card-img-top'
                alt='...'
              />
              <div className='card_body text-black text-center'>
                <p className='card-text'>BA </p>
                <p className='card-text'>Political Science</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
