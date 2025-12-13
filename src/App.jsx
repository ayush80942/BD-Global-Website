import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/Services/Services';
import Pricing from './components/Pricing/Pricing';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Resources from './components/Resources/Resources';
import Home from './components/Home/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/services" 
            element={
              <>
                <Services />
              </>
            } 
          />
          <Route 
            path="/pricing" 
            element={
              <>
                <Pricing />

              </>
            } 
          />
          <Route 
            path="/about-us" 
            element={
              <>
                <AboutUs />
              </>
            } 
          />
          <Route 
            path="/resources" 
            element={
              <>
                <Resources />
              </>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <>
                <ContactUs />
              </>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
