import Logo from '../logo.png';
import './Contact.css';
import { BsTelephoneFill,BsFillChatTextFill,BsFillPinMapFill,BsWhatsapp,BsFacebook,BsTwitterX,BsLinkedin } from "react-icons/bs";
import menuData from '../menuData';
import Dropdown from './dropdown.jsx';
import { useState } from 'react';
import IMG5 from '../img5.png';
import IMG6 from '../img6.png';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Contact() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="contact">
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
        <div className='C-content'>
            <div className='img-container'>
                <img src={IMG5} alt='img' className='img3'/>
                <div>
                    <h1>CONTACT US</h1>
                    <p>_____________________________________</p>
                </div>
            </div>
            <div className='contact-us'>
                <div className='form-container'>
                    <div className='img-cont'>
                        <img src={IMG6} alt='img'/>
                    </div>
                    <div>
                        <div className='c_title'>
                            <div></div>
                            <h1>Get In Touch</h1>
                        </div>
                        <p>To help and answer any questions you might have. We look forward to hearing from you!</p>
                        <div className='form'>
                            <form className='form1'>
                                <input type='text' placeholder='First-Name' className='input'/>
                                <input type='text' placeholder='Last-Name' className='input'/>
                            </form>
                            <form className='form2'>
                                <input type='email' placeholder='Email' className='input'/>
                                <select type='select' placeholder='Services' className='input'>
                                    <option value='select'>Graphic Designing</option>
                                    <option value='select'>Web & App Development</option>
                                    <option value='select'>Market Analysis</option>
                                    <option value='select'>Data Analytics</option>
                                </select>
                                <textarea type='description' placeholder='Message' className='input'/>
                                <button className='button'>Submit <FaArrowRight/></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                    <div><Link to='/Education' className='Link1'>Education</Link></div>
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
    )
}
export default Contact;