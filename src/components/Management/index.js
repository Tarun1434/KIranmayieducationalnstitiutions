import React from 'react'
import './index.css'
import Header from '../Header'
import Marqueetag from '../Marqueetag'
import Footer from '../Footer'

function Management() {
  const topFacultyList = [
    {
      id: 1,
      name: 'Dr. John Doe (Director)',
      photo:
        'https://res.cloudinary.com/dsnjnciud/image/upload/v1738305358/ai-generated-an-indian-male-teacher-smiling-in-the-classroom-photo_cptixs.jpg',
      course: 'Director',
    },
    {
      id: 2,
      name: 'Mrs. Jane Smith (Correspondent)',
      photo:
        'https://res.cloudinary.com/dsnjnciud/image/upload/v1738305359/premium_photo-1682089789852-e3023ff6df24_uzwdnu.jpg',
      course: 'Correspondent',
    },
    {
      id: 3,
      name: 'Mr. Sam Brown (Principal)',
      photo:
        'https://res.cloudinary.com/dsnjnciud/image/upload/v1738305359/confident-bangladeshi-male-school-teacher-posing-in-classroom-education-diversity-teaching-concept-photo_mvm4lg.jpg',
      course: 'Principal',
    },
  ]

  const subjectTeacherList = [
    {
      id: 4,
      name: 'Mr. Mark White (Mathematics)',
      photo:
        'https://res.cloudinary.com/dsnjnciud/image/upload/v1738305358/ai-generated-an-indian-male-teacher-smiling-in-the-classroom-photo_cptixs.jpg',
      course: 'Mathematics',
    },
    {
      id: 5,
      name: 'Ms. Sarah Green (Physics)',
      photo:
        'https://res.cloudinary.com/dsnjnciud/image/upload/v1738305359/premium_photo-1682089789852-e3023ff6df24_uzwdnu.jpg',
      course: 'Physics',
    },
    {
      id: 6,
      name: 'Mr. David Black (Chemistry)',
      photo:
        'https://res.cloudinary.com/dsnjnciud/image/upload/v1738305359/confident-bangladeshi-male-school-teacher-posing-in-classroom-education-diversity-teaching-concept-photo_mvm4lg.jpg',
      course: 'Chemistry',
    },
    {
      id: 7,
      name: 'Ms. Lucy Blue (Biology)',
      photo:
        'https://res.cloudinary.com/dsnjnciud/image/upload/v1738305358/ai-generated-an-indian-male-teacher-smiling-in-the-classroom-photo_cptixs.jpg',
      course: 'Biology',
    },
    {
      id: 8,
      name: 'Mr. Jack Red (Computer Science)',
      photo:
        'https://res.cloudinary.com/dsnjnciud/image/upload/v1738305359/premium_photo-1682089789852-e3023ff6df24_uzwdnu.jpg',
      course: 'Computer Science',
    },
  ]

  return (
    <>
      <Header />
      <Marqueetag />
      <div className='Management_section'>
        <h1 className='coleg_faculty'>College Faculty</h1>

        {/* Top Faculty: Director, Correspondent, Principal */}
        <div className='director_section'>
          {topFacultyList.map(teacher => (
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

        {/* Subject Teachers */}
        <div className='teacher_section'>
          {subjectTeacherList.map(teacher => (
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
      </div>
      <Footer />
    </>
  )
}

export default Management
