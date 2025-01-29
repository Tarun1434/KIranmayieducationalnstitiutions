import Marquee from 'react-smooth-marquee'
import './index.css'

function Marqueetag() {
  return (
    <div className='marqueetag py-2'>
      <Marquee speed={1}>
        <span>
          🌟 Welcome to Our College Website! 🌟 Admission Open for 2025 Batch!
          &nbsp;|&nbsp; 🌟 Welcome to the KIRANMAYI EDUCATION INSTITUTE
          INTERMEDIATE & DEGREE 🌟 &nbsp;|&nbsp; 📚 Learn and Grow with Us 📚
        </span>
      </Marquee>
    </div>
  )
}

export default Marqueetag
