import React from 'react'
import './index.css'
import Header from '../Header'
import Marqueetag from '../Marqueetag'
import Footer from '../Footer'

function Gallery() {
  const images = [
    'https://res.cloudinary.com/dsnjnciud/image/upload/v1738318890/1920x1080-gray-solid-color-background_znzvod.jpg',
    'https://res.cloudinary.com/dsnjnciud/image/upload/v1738318890/1920x1080-gray-solid-color-background_znzvod.jpg',
    'https://res.cloudinary.com/dsnjnciud/image/upload/v1738318890/1920x1080-gray-solid-color-background_znzvod.jpg',
    'https://res.cloudinary.com/dsnjnciud/image/upload/v1738318890/1920x1080-gray-solid-color-background_znzvod.jpg',
    'https://res.cloudinary.com/dsnjnciud/image/upload/v1738318890/1920x1080-gray-solid-color-background_znzvod.jpg',
    'https://res.cloudinary.com/dsnjnciud/image/upload/v1738318890/1920x1080-gray-solid-color-background_znzvod.jpg',
    'https://res.cloudinary.com/dsnjnciud/image/upload/v1738318890/1920x1080-gray-solid-color-background_znzvod.jpg',
    'https://res.cloudinary.com/dsnjnciud/image/upload/v1738318890/1920x1080-gray-solid-color-background_znzvod.jpg',
    'https://res.cloudinary.com/dsnjnciud/image/upload/v1738318890/1920x1080-gray-solid-color-background_znzvod.jpg',
  ]

  return (
    <>
      <Header />
      <Marqueetag />
      <div className='gallery'>
        <h2 className='heading_capusgallery'>Campus Gallery</h2>
        <div className='gallery-grid'>
          {images.map((img, index) => (
            <div
              key={index}
              className={`gallery-card gallery-card-${index + 1}`}
            >
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
