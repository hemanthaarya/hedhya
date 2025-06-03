import { Link } from "react-router-dom";
import menuData from '../menuData';
import { useState } from "react";
import Logo from '../logo.png';
import './Home.css';
import { BsTelephoneFill, BsFillChatTextFill, BsFillPinMapFill, BsWhatsapp, BsFacebook, BsTwitterX, BsLinkedin } from "react-icons/bs";
import Dropdown from './dropdown.jsx'; 
function Eduacation(){
    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => setMenuOpen(!menuOpen);
    return(
        <div>
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
            <div className="e-content">
                
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
export default Eduacation;