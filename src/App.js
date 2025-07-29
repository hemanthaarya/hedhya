import './App.css';
import {Helmet} from 'react-helmet';
import CITR from './Pages/CITR.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Home from './Pages/HomePage.jsx';
import ServiceDetail from './Pages/ServiceDetail';
import Services from './Pages/Services.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ScrollToTop from './Pages/Scrollto.js';

function App() {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>VIJAYAWADA INNOVATIVE TECHNOLOGY DEVELOPMENT HUB PRIVATE LIMITED</title>
      </Helmet>

      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:service" element={<ServiceDetail />} />
          <Route path="/CITR" element={<CITR/>}/>
          <Route path="/CITR/:title" element={<CITR />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
