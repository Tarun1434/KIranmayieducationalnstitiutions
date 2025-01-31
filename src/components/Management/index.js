import React from 'react'
import './index.css'
import Header from '../Header'
import Marqueetag from '../Marqueetag'
import Footer from '../Footer'

function Management() {
  const facultyList = [
    {
      id: 1,
      name: 'John Doe',
      photo:
        'https://res.cloudinary.com/dsnjnciud/image/upload/v1738305358/ai-generated-an-indian-male-teacher-smiling-in-the-classroom-photo_cptixs.jpg',
      course: 'Mathematics',
    },
    {
      id: 2,
      name: 'Jane Smith',
      photo:
        'https://res.cloudinary.com/dsnjnciud/image/upload/v1738305359/premium_photo-1682089789852-e3023ff6df24_uzwdnu.jpg',
      course: 'Physics',
    },
    {
      id: 3,
      name: 'Sam Brown',
      photo:
        'https://res.cloudinary.com/dsnjnciud/image/upload/v1738305359/confident-bangladeshi-male-school-teacher-posing-in-classroom-education-diversity-teaching-concept-photo_mvm4lg.jpg',
      course: 'Computer Science',
    },
  ]

  return (
    <>
      <Header />
      <Marqueetag />
      <div className='Management_section'>
        <h1 className='coleg_faculty'>COLLEGE FACULTY</h1>
        {facultyList.map(teacher => (
          <div key={teacher.id} className='teacher_card'>
            <img
              src={teacher.photo}
              alt={teacher.name}
              className='teacher_photo'
            />
            <p className='teacher_name'>{teacher.name}</p>
            <span className='teacher_course'>{teacher.course}</span>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}

export default Management
