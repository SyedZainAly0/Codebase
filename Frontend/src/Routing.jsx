import React from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

function Mainpage() {
  return (
    <>
      <h3>Welcome to Dashboard Page</h3>
    </>
  );
}

function Homepage() {
  const navigate = useNavigate();

  return (
    <>
      <h3>Welcome to Home Page</h3>
      <button onClick={() => navigate("/")}>
        Go to Main Page
      </button>
    </>
  );
}

function Contactus() {
  const navigate = useNavigate();

  return (
    <>
      <h3>Welcome to Contact Page</h3>
      <button onClick={() => navigate("/")}>
        Go to Main Page
      </button>
    </>
  );
}

function About() {
  const navigate = useNavigate();

  return (
    <>
      <h3>Welcome to About Page</h3>
      <button onClick={() => navigate("/")}>
        Go to Main Page
      </button>
    </>
  );
}

function Navbar() {
  return (
    <>
      <Link to="/">Main</Link> |{" "}
      <Link to="/home">Home</Link> |{" "}
      <Link to="/contact">Contact</Link> |{" "}
      <Link to="/about">About</Link>
    </>
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
    </BrowserRouter>
  );
}

export default Icon;