import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Products from './Product';
import About from './About';
import Contact from './Contact';
import './App.css'


function App() {
  const [navOpen, setNavOpen] = useState(false);

  const handleMenuClick = () => setNavOpen(!navOpen);

  return (
    <Router>
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
            <h1>Sponsers</h1>
            <li><a href="https://www.nike.com" target="_blank" rel="noopener noreferrer">Nike</a></li>
            <li><a href="https://www.adidas.com" target="_blank" rel="noopener noreferrer">Adidas</a></li>
            <li><a href="https://www.puma.com" target="_blank" rel="noopener noreferrer">Puma</a></li>
            <li><a href="https://www.reebok.com" target="_blank" rel="noopener noreferrer">Reebok</a></li>
          </ul>
          <ul>
            <h1>Company</h1>
            <li><Link to="/about">About</Link></li>
            <li><a href="https://www.hisenretails.com/careers" target="_blank" rel="noopener noreferrer">Careers</a></li>
            <li><a href="https://www.hisenretails.com/blog" target="_blank" rel="noopener noreferrer">Blog</a></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <ul>
            <h1>Support</h1>
            <li><a href="https://www.hisenretails.com/help" target="_blank" rel="noopener noreferrer">Help Center</a></li>
            <li><a href="https://www.hisenretails.com/shipping" target="_blank" rel="noopener noreferrer">Shipping</a></li>
            <li><a href="https://www.hisenretails.com/returns" target="_blank" rel="noopener noreferrer">Returns</a></li>
            <li><a href="https://www.hisenretails.com/faq" target="_blank" rel="noopener noreferrer">FAQ</a></li>
          </ul>
          <ul>
            <h1>Legal</h1>
            <li><a href="https://www.hisenretails.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a></li>
            <li><a href="https://www.hisenretails.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            <li><a href="https://www.hisenretails.com/cookies" target="_blank" rel="noopener noreferrer">Cookie Policy</a></li>
            <li><a href="https://www.hisenretails.com/accessibility" target="_blank" rel="noopener noreferrer">Accessibility</a></li>
          </ul>
        </section>
        <p>&copy; 2024 Hisen.retails. All rights reserved.</p>
      </footer>
    </Router>
  )
}

export default App
