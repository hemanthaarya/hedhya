import './App.css';
import {Helmet} from 'react-helmet';
import React from 'react';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Home from './Pages/HomePage.jsx';
import Services from './Pages/Services.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>VIT HUB</title>
      </Helmet>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
