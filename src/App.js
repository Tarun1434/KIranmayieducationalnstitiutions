import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons' // Import WhatsApp Icon
import {faPhone} from '@fortawesome/free-solid-svg-icons' // Import Phone Icon
import ScrollToTop from './ScrollTop'
import Home from './components/Home'
import About from './components/About'
import Departments from './components/Departments'
import Gallery from './components/Gallery'
import Management from './components/Management'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/departments' element={<Departments />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/management' element={<Management />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

        {/* WhatsApp Icon */}
        <div className='whatspp'>
          <FontAwesomeIcon
            icon={faWhatsapp}
            style={{color: 'white'}}
            size='2x'
          />
        </div>

        {/* Phone Icon */}
        <div className='call'>
          <FontAwesomeIcon icon={faPhone} style={{color: 'white'}} size='2x' />
        </div>
      </div>
    </Router>
  )
}

export default App
