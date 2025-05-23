import './App.css';
import {Helmet} from 'react-helmet';
import React from 'react';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Home from './Pages/HomePage.jsx';

function App() {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>VIT HUB</title>
      </Helmet>
      <div>
        <Home/>
        <About/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
