import React from 'react'
import './index.css'
import Header from '../Header'
import Marqueetag from '../Marqueetag'
import Footer from '../Footer'

function Departments() {
  const facilities_photos = [
    {
      id: 1,
      facility_image:
        'https://res.cloudinary.com/dsnjnciud/image/upload/v1737897280/33E486F5F3B7E76C95CC9DC962D1AB7D_uwaka5.jpg',
      facility_text: 'PHYSICS LABRATORY',
    },
    {
      id: 2,
      facility_image:
        'https://res.cloudinary.com/dsnjnciud/image/upload/v1737897306/this-is-what-we-are-testing-today-biology-lesson-science-experiments-in-bilogy-laboratory-little-girls-in-school-lab-biology-education-little-scientist-work-with-microscope-chemistry-research-2B8M3YN_lujeup.jpg',
      facility_text: 'CHEMICAL LABRATORY',
    },
    {
      id: 3,
      facility_image:
        'https://res.cloudinary.com/dsnjnciud/image/upload/v1737898660/stock-chart-rising-upward_u2vasf.jpg',
      facility_text: 'COMPUTER LABRATORY',
    },
    {
      id: 4,
      facility_image:
        'https://res.cloudinary.com/dsnjnciud/image/upload/v1737959696/seidenberg-article-hero-computer-science-degree_gi5ubo.jpg',
      facility_text: 'LIBRARY',
    },
    {
      id: 5,
      facility_image:
        'https://res.cloudinary.com/dsnjnciud/image/upload/v1737959768/indian-school-chemistry-lab-research-students-working-class-together-KX38BN_e3k4rk.jpg',
      facility_text: 'DIGITAL CLASSES',
    },
    {
      id: 6,
      facility_image:
        'https://res.cloudinary.com/dsnjnciud/image/upload/v1737959740/asian-college-student-working-on-botany_cfur7j.jpg',
      facility_text: 'SPORTS GROUND',
    },
    {
      id: 7,
      facility_image:
        'https://res.cloudinary.com/dsnjnciud/image/upload/v1737960807/Rectangle-1783_lxz3ve.png',
      facility_text: 'ACHEIVEMENTS',
    },
    {
      id: 7,
      facility_image:
        'https://res.cloudinary.com/dsnjnciud/image/upload/v1737961005/graduates-in-mortar-boards-with-diplomas-RDM3AA_auklqc.jpg',
      facility_text: 'CULTURAL ACTIVITIES',
    },
  ]
  return (
    <>
      <Header />
      <Marqueetag />
      <div className='departments'>
        <div className='courses_offered d-flex flex-column justify-content-center align-items-center'>
          <div className='for_intermediate'>
            <h1 className='facilities-heading'>FACILITIES</h1>
            <div className='facilities-cards d-flex flex wrap justify-content-center'>
              {facilities_photos.map(facilty => (
                <div className='facility-card' key={facilty.id}>
                  <img
                    src={facilty.facility_image}
                    className='facility-img'
                    alt='{facilty.facility_text}'
                  />
                  <div className='facility-body text-black'>
                    <p className='facility-text'>{facilty.facility_text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='container text-center mt-4'>
          <hr id='five' />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Departments
