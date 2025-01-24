import React from 'react'
import './index.css'
import Header from '../Header'

function Gallery() {
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']

  return (
    <>
      <Header />
      <div className='gallery'>
        <h2>Campus Gallery</h2>
        <div className='gallery-grid'>
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Gallery ${index}`} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Gallery
