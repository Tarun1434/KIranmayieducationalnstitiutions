import './index.css'
import {NavLink} from 'react-router-dom'
import {BsChevronRight} from 'react-icons/bs'
import {IoMail} from 'react-icons/io5'
import {IoCall} from 'react-icons/io5'
import {FaHouse} from 'react-icons/fa6'

function Footer() {
  return (
    <footer>
      <div className='Footer_container'>
        <div className='about_section'>
          <h3 className='heading_footer'>About Us</h3>
          <p>
            Kiranmayi Degree College was founded by Shri N. Tirupathi Rao garu,
            a distinguished academician and the pioneer of residential colleges,
            in 2001 at the educational hub of Pathapatnam. Since its inception,
            it has been dedicated to shaping the bright futures of its students
            with numerous achievements and accolades.
          </p>
          <NavLink to='/about'>Read more...</NavLink>
        </div>
        <div className='usefulLinks_section'>
          <h3 className='heading_footer'>Useful Links</h3>
          <ul className='list_items'>
            <li className='list-item'>
              <BsChevronRight />

              <NavLink to='/'>
                <span>Home</span>
              </NavLink>
            </li>
            <li className='list-item'>
              <BsChevronRight />
              <NavLink to='/about'>
                {' '}
                <span>About</span>
              </NavLink>
            </li>
            <li className='list-item'>
              <BsChevronRight />
              <a href='http://flames.ccbp.tech'>
                <span>Facilities</span>
              </a>
            </li>
            <li className='list-item'>
              <BsChevronRight />
              <a href='http://flames.ccbp.tech'>
                <span> Founders Message</span>
              </a>
            </li>
            <li className='list-item'>
              <BsChevronRight />
              <a href='http://flames.ccbp.tech'>
                <span>Courses offered</span>
              </a>
            </li>
          </ul>
        </div>
        <div className='infrastrucuture_section'>
          <h3 className='heading_footer'>Infrastrucutre</h3>
          <ul className='list_items'>
            <li className='list-item'>
              <BsChevronRight />
              <a href='http://flames.ccbp.tech'>
                <span>Library</span>
              </a>
            </li>
            <li className='list-item'>
              <BsChevronRight />
              <a href='http://flames.ccbp.tech'>
                <span>Chenmical Lab</span>
              </a>
            </li>
            <li className='list-item'>
              <BsChevronRight />
              <a href='http://flames.ccbp.tech'>
                <span>Science Lab</span>
              </a>
            </li>
            <li className='list-item'>
              <BsChevronRight />
              <a href='http://flames.ccbp.tech'>
                <span> Cmputer Lab</span>
              </a>
            </li>
            <li className='list-item'>
              <BsChevronRight />
              <a href='http://flames.ccbp.tech'>
                <span>Seminar Hall</span>
              </a>
            </li>
          </ul>
        </div>
        <div className='Get_in_touch'>
          <h3 className='heading_footer'>Get in Touch</h3>
          <div>
            <FaHouse size={35} />
            <span>
              Kiranmayi Degree College, Pathapatnam - 532213, Srikakulam
              District, Andhra Pradesh, India
            </span>
          </div>
          <div>
            <IoCall />
            <span>+91 99124 25999, 91214 25999, 9121693459</span>
          </div>
          <div>
            <IoMail />
            <span>kiranmayidegreecollege@gmail.com</span>
          </div>
        </div>
      </div>
      <div className='footers_bottom'>
        <p className='footer_para'>
          Copyright © Kiranmayi Degree College 2021. All Rights Reserved |
          Designed by <a href='http://flames.ccbp.tech'> Tarun Potnuru</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
