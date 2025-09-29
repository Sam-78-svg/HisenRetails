import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import './App.css'

// Dummy components for demonstration
const Products = () => <div>Products Page</div>
const About = () => <div>About Page</div>
const Contact = () => <div>Contact Page</div>

function App() {
  return (
    <Router>
      <header>
        <nav className="navbar">
          <img src="#" alt="WebsiteLogo" id='websiteLogo' />
          <section className="nav-items">
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <button id='loginBtn' className='loginBtn' role='button'>Log In</button>
          </section>
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
    </Router>
  )
}

export default App
