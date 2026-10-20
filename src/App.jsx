import { Link, Route, Routes } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <div className="page-copy">
      <p className="page-label">A SIMPLE ROUTER DEMO</p>
      <h1>Welcome home.</h1>
      <p className="page-description">
        A little example of smooth, simple navigation built with React.
      </p>
      <span className="page-note">Pick a page from the menu to get started.</span>
    </div>
  )
}

function About() {
  return (
    <div className="page-copy">
      <p className="page-label">GET TO KNOW THE DEMO</p>
      <h1>About this page.</h1>
      <p className="page-description">
        This small practical shows how React Router switches pages without a
        full browser reload.
      </p>
      <span className="page-note">One app. Three pages. No page refresh.</span>
    </div>
  )
}

function Contact() {
  return (
    <div className="page-copy">
      <p className="page-label">LET’S TALK</p>
      <h1>Say hello.</h1>
      <p className="page-description">
        Have a question or want to learn more? We’d love to hear from you.
      </p>
      <a className="contact-link" href="mailto:hello@example.com">
        hello@example.com <span aria-hidden="true">↗</span>
      </a>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Link className="brand" to="/" aria-label="Route home">
          <span className="brand-mark" aria-hidden="true">R</span>
          <span className="brand-name">route<span>studio</span></span>
        </Link>
        <nav aria-label="Main navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main className="page">
        <div className="page-card">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <div className="visual" aria-hidden="true">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-sun" />
            <div className="visual-card">
              <span className="visual-card-dot" />
              <span>moving forward</span>
              <span className="visual-arrow">↗</span>
            </div>
            <span className="visual-caption">A smoother way around</span>
          </div>
        </div>
      </main>
      <footer className="app-footer">
        <span>MADE FOR THE WEB</span>
        <span>React Router <span className="footer-dot">·</span> 2026</span>
      </footer>
    </div>
  )
}

export default App
