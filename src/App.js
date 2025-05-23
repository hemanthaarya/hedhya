import './App.css';
import {Helmet} from 'react-helmet';
import React from 'react';
import About from './Pages/About.jsx';

function App() {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>VIT HUB</title>
      </Helmet>
      <div>
        <About/>
      </div>
    </>
  );
}

export default App;
