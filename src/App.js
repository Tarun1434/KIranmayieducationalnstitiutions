import React from 'react'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Departments from './components/Departments'
import Gallery from './components/Gallery'
import News from './components/News'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/departments' element={<Departments />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/news' element={<News />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
