import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import './App.css'

const Products = () => <div>Products Page</div>
const About = () => <div>About Page</div>
const Contact = () => <div>Contact Page</div>

function App() {
  const [navOpen, setNavOpen] = useState(false);

  const handleMenuClick = () => setNavOpen(!navOpen);

  return (
    <Router>
      {/* Headeer and Navigation Section */}
      <header>
        <nav className="navbar">
          <img src="#" alt="WebsiteLogo" id='websiteLogo' />
          <section className={`nav-items${navOpen ? ' open' : ''}`}>
            <ul className="nav-links">
              <li><Link to="/" onClick={() => setNavOpen(false)}>Home</Link></li>
              <li><Link to="/products" onClick={() => setNavOpen(false)}>Products</Link></li>
              <li><Link to="/about" onClick={() => setNavOpen(false)}>About</Link></li>
              <li><Link to="/contact" onClick={() => setNavOpen(false)}>Contact</Link></li>
            </ul>
            <button id='loginBtn' className='loginBtn' role='button'>
              Log In <i className="fa fa-user" aria-hidden={navOpen}></i>
            </button>
          </section>
          <button id='menuIcon' onClick={handleMenuClick}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
        </nav>
      </header>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* <footer Section*/}
      <footer className="footer">
        <section className='footerLinks'>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
            <li><a href="#">Link 4</a></li>
          </ul>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
            <li><a href="#">Link 4</a></li>
          </ul>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
            <li><a href="#">Link 4</a></li>
          </ul>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
            <li><a href="#">Link 4</a></li>
          </ul>
        </section>
        <p>&copy; 2024 Hisen.retails. All rights reserved.</p>
      </footer>
    </Router>
  )
}

export default App
