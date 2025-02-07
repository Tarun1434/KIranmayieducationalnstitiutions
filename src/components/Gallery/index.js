import React from 'react'
import './index.css'
import Header from '../Header'
import Marqueetag from '../Marqueetag'
import Footer from '../Footer'

function Gallery() {
  const images = [
    'https://res.cloudinary.com/dsnjnciud/image/upload/v1738912335/students--excel_4844_prwrhm.jpg',
    'https://res.cloudinary.com/dsnjnciud/image/upload/v1738912220/class1-big_anpnez.jpg',
    'https://res.cloudinary.com/dsnjnciud/image/upload/v1738912652/galleryImg06_zfomm9.jpg',
    'https://res.cloudinary.com/dsnjnciud/image/upload/v1738912218/29c7ab_2b6e0190064d4782922f37c29314b9ea_mv2_axs8sj.jpg',
    'https://res.cloudinary.com/dsnjnciud/image/upload/v1737788718/teacher-explaining-science-concept-class_768772-1200_pufx0j.jpg',
    'https://res.cloudinary.com/dsnjnciud/image/upload/v1738912694/galleryImg04_vsipzl.jpg',
    'https://res.cloudinary.com/dsnjnciud/image/upload/v1737788590/mobile-al-usa-march-29th-600nw-2308740157_yyq1h9.jpg',
    'https://res.cloudinary.com/dsnjnciud/image/upload/v1737959768/indian-school-chemistry-lab-research-students-working-class-together-KX38BN_e3k4rk.jpg',
    'https://res.cloudinary.com/dsnjnciud/image/upload/v1738912218/77061_20_42_jyuidg.jpg',
    'https://res.cloudinary.com/dsnjnciud/image/upload/v1737959740/asian-college-student-working-on-botany_cfur7j.jpg',
  
  
  ]

  return (
    <>
      <Header />
      <Marqueetag />
      <div className='gallery'>
        <h2 className='heading_capusgallery'>Campus Gallery</h2>
        <div className='gallery-grid'>
          {images.map((img, index) => (
            <div key={index} className='image_photos_borders'>
              <img src={img} alt={`Gallery ${index}`} className='gallery-img' />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Gallery
