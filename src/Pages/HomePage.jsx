import React, { useState } from 'react';
import Logo from '../logo.png';
import IMG1 from '../img1.png';
import IMG2 from '../img2.png';
import './Home.css';
import { BsTelephoneFill, BsFillChatTextFill, BsFillPinMapFill, BsWhatsapp, BsFacebook, BsTwitterX, BsLinkedin } from "react-icons/bs";
import menuData from '../menuData';
import Dropdown from './dropdown.jsx'; 
import Logo1 from '../s-box1.png';
import Logo2 from '../s-box2.png';
import Logo3 from '../s-box3.png';
import Logo4 from '../s-box4.png';
import { Link } from 'react-router-dom';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className='main'>
      <header className='header'>
        <div className='navbar-1'>
          <img src={Logo} alt='logo' className='logo' />
          <div className='details'>
            <BsTelephoneFill className='phn'/>
            <h3>+91 8886667850</h3>
            <button className='button'>
              <Link to='/contact' className='Link1'>Get a Quote</Link>
            </button>
          </div>
        </div>

        <nav className='navbar-2'>
          {/* Hamburger Icon visible on mobile only */}
          <button 
            className='options1' 
            onClick={toggleMenu} 
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={menuOpen}
          >
            <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          </button>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
            <h4><Link to='/' className='Link' onClick={() => setMenuOpen(false)}>Home</Link></h4>
            <h4><Link to='/about' className='Link' onClick={() => setMenuOpen(false)}>About Us</Link></h4>
            <h4><Link to='/services' className='Link' onClick={() => setMenuOpen(false)}>Services</Link></h4>
            <h4><Link to='/Education' className='Link' onClick={() => setMenuOpen(false)}>Education</Link></h4>
            <h4><Link to='/contact' className='Link' onClick={() => setMenuOpen(false)}>Contact</Link></h4>
          </div>

          {/* Desktop Menu */}
          <div className='options'>
            <h4><Link to='/' className='Link'>Home</Link></h4>
            <h4><Link to='/about' className='Link'>About Us</Link></h4>
            <div className='service'>
              <h4><Link to='/services' className='Link'>Services</Link></h4>
              <Dropdown menuData={menuData} />
            </div>
            <h4><Link to='/Education' className='Link'>Eduacation & Training</Link></h4>
            <h4><Link to='/contact' className='Link'>Contact</Link></h4>
          </div>
        </nav>
      </header>

      <main className='h-content'>
        <section className='h-img-container'>
          <img src={IMG1} alt='banner' className='img1' />
        </section>

        <section className='we_are'>
          <div className='img2'>
            <img src={IMG2} alt='Who We Are' className='img2' />
          </div>
          <div className='img2_matter'>
            <div className='text-container'>
              <div className='text-back'>Who We Are</div>
              <div className='text-front'>Who We Are</div>
            </div>
            <h2>Your Trusted Partner for Growth</h2>
            <p>
              <b>VIT HUB</b> is your trusted partner, delivering innovative, affordable solutions in creative design, marketing, data analytics, and project development. 
              We specialize in helping small and medium businesses overcome challenges and achieve measurable growth with strategies tailored to their unique needs.
            </p>
            <p>
              Our expert team connects you with your audience, optimizes processes, and strengthens your business with precision and creativity. More than a service provider, we’re your trusted partner in transforming vision into success.
            </p>
            <button className='button'><Link to='/about' className='Link1'>About us</Link></button>
          </div>
        </section>

        <section className='services'>
          <div className='s-title'>
            <div className='s-text-container'>
              <div className='s-text-back'>Services</div>
              <div className='s-text-front'>Our Services</div>
            </div>
          </div>
          <div className='h-box'>
            {[ 
              {logo: Logo1, title: "Graphic Design", desc: "We create stunning visuals that captivate and engage your audience, enhancing your brand identity."},
              {logo: Logo2, title: "Web & App Development", desc: "We create stunning visuals that captivate and engage your audience, enhancing your brand identity."},
              {logo: Logo3, title: "Marketing Services", desc: "We create stunning visuals that captivate and engage your audience, enhancing your brand identity."},
              {logo: Logo4, title: "Data Analytics", desc: "We create stunning visuals that captivate and engage your audience, enhancing your brand identity."}
            ].map(({logo, title, desc}, i) => (
              <div className='h-box-1' key={i}>
                <img src={logo} alt={title} className='logo-1' />
                <h3>{title}</h3>
                <p>{desc}</p>
                <button className='button'><Link to='/services' className='Link1'>Read More</Link></button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className='footer'>
        <div className='footer-up'>
          <div className='contact'>
            <div className='c_title'>
              <h1>Contact</h1>
            </div>
            <div>
              <h4><BsFillChatTextFill /> vitdhub@gmail.com</h4>
              <h4><BsFillPinMapFill /> Vijayawada, AndhraPradesh, 521137</h4>
            </div>
          </div>

          <div className='news_letter'>
            <div className='c_title'>
              <h1>News Letter</h1>
            </div>
            <p>Subscribe to our newsletter for the latest updates and offers.</p>
            <textarea placeholder='Subscribe to our channel' className='input' />
          </div>

          <div className='Pages'>
            <div className='c_title'>
              <h1>Pages</h1>
            </div>
            <div className='pages'>
              <div><Link to='/' className='Link1'>Home</Link></div>
              <div><Link to='/about' className='Link1'>About</Link></div>
              <div><Link to='/services' className='Link1'>Services</Link></div>
              <div><Link to='/contact' className='Link1'>Contact</Link></div>
            </div>
          </div>
        </div>

        <div className='footer-down'>
          <img src={Logo} alt='logo' className='logo1' />
          <div className='icons'>
            <BsWhatsapp className='icon' />
            <BsFacebook className='icon' />
            <BsTwitterX className='icon' />
            <BsLinkedin className='icon' />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
