import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import "./style.css";

function Mainpage() {
     const navigate = useNavigate();
  return (
    <div className="main-container">
      
  
      <section className="hero">
        <h1>Welcome to Resturent</h1>
        <p>
         Exceptional flavors. Elegant surroundings.
        </p>

        <button className="hero-btn" onClick={() => navigate("/contact")}>
          Reserve Your Table
        </button>
      </section>

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
    <div className="home-container">

  
      <section className="home-hero">
        <h1>Discover Our World</h1>
        <p>Explore our story, services, and what makes us special</p>
      </section>


      <section className="home-section">
        <h2>Who We Are</h2>
        <p>
          We are passionate about delivering high-quality experiences with
          attention to detail and customer satisfaction.
        </p>
      </section>

      <section className="home-section cards">
        <div className="card">
          <h3>⚡ Fast Service</h3>
          <p>Quick and efficient delivery for all customers</p>
        </div>

        <div className="card">
          <h3>💎 Premium Quality</h3>
          <p>We never compromise on quality</p>
        </div>

        <div className="card">
          <h3>🤝 Customer First</h3>
          <p>Your satisfaction is our top priority</p>
        </div>
      </section>

      <section className="home-cta">
        <h2>Want to Explore More?</h2>
        <button onClick={() => navigate("/")}>
          Go to Dashboard
        </button>
      </section>

    </div>
  );
}


function Contactus() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    order: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("User Data:", formData);

    alert("Order Submitted Successfully ");

    setFormData({
      name: "",
      email: "",
      order: "",
      message: ""
    });
  };

  return (
    <div className="contact-container">
      <h1>Contact / Order</h1>
      <p>Place your order or send us a message </p>

      <form onSubmit={handleSubmit} className="contact-form">
        
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="order"
          placeholder="Your Order"
          value={formData.order}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
        />

        <button type="submit">Submit Order</button>
      </form>

      <button className="back-btn" onClick={() => navigate("/")}>
        Go to Main Page
      </button>
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
        <Route path="/home" element={<Homepage />}>
        
        </Route>
        <Route path="/contact" element={<Contactus />} />
        <Route path="/about" element={<About />} />
      </Routes>
        <Footer /> 
    </BrowserRouter>
  );
}

export default Icon;