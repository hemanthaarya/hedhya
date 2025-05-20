import './App.css';
import Home from './Pages/HomePage.jsx';
import {Helmet} from 'react-helmet';
import React from 'react';

function App() {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>VIT HUB</title>
      </Helmet>
      <div>
        <Home/>
      </div>
    </>
  );
}

export default App;
