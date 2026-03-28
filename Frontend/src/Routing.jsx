import React from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import "./style.css";

function Mainpage() {
  return (
    <div className="main-container">
      
      {/* HERO SECTION */}
      <section className="hero">
        <h1>Welcome to Resturent</h1>
        <p>
         Exceptional flavors. Elegant surroundings.
        </p>

        <button className="hero-btn">
          Reserve Your Table
        </button>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <div className="card">
          <h3>🍽 Fine Dining</h3>
          <p>Premium quality food with expert chefs</p>
        </div>

        <div className="card">
          <h3>🌍 Global Cuisine</h3>
          <p>Explore dishes from around the world</p>
        </div>

        <div className="card">
          <h3>📅 Easy Booking</h3>
          <p>Reserve your table in seconds</p>
        </div>
      </section>

    </div>
  );
}

function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>Home</h1>
      <p>This is your home page</p>
      <button onClick={() => navigate("/")}>Go to Main Page</button>
    </div>
  );
}

function Contactus() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>Contact</h1>
      <p>Feel free to contact us anytime 📩</p>
      <button onClick={() => navigate("/")}>Go to Main Page</button>
    </div>
  );
}

function About() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>About</h1>
      <p>We work with global clients 🌍</p>
      <button onClick={() => navigate("/")}>Go to Main Page</button>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">MyApp</h2>
      <div className="links">
        <Link to="/">Main</Link>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 MyApp. All rights reserved.</p>

      <div className="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Support</a>
      </div>
    </footer>
  );
}

function Icon() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/about" element={<About />} />
      </Routes>
        <Footer /> 
    </BrowserRouter>
  );
}

export default Icon;