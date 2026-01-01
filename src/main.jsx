import React from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import './assets/index.css'
import Header from './assets/Header/Header'
import Footer from './assets/footer/Footer'
import Home from './assets/Homepage/Home'
import Service from './assets/Services/Service'
import Login from './assets/Applynow/Login'
import Signup from './assets/Applynow/Signup'
import About from "./assets/About/About";
import Contact from "./assets/contact/Contact";
import Courses from "./assets/Courses/Courses";

const root = createRoot(document.getElementById("root"));
  
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <Routes>
        {/* Routes with Header and Footer */}
        <Route path="/" element={
          <>
            <Header />
            <main>
              <Home />
            </main>
            <Footer />
          </>
        } /> 
        <Route path="/service" element={
          <>
            <Header />
            <main>
              <Service />
            </main>
            <Footer />
          </>
        } />

        <Route path="/about" element={
          <>
            <Header />
            <main>
              <About />
            </main>
            <Footer />
          </>
        } />

        <Route path="/contact" element={
          <>
            <Header />
            <main>
              <Contact />
            </main>
            <Footer />
          </>
        } />

        <Route path="/courses" element={
          <>
            <Header />
            <main>
              <Courses />
            </main>
            <Footer />
          </>
        } />
        
        {/* Routes without Header and Footer */}
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);