import Logo from '../Images/logo.jpg';
import './About.css';
import  { useState } from 'react';
import { BsTelephoneFill,BsFillChatTextFill,BsFillPinMapFill,BsWhatsapp,BsFacebook,BsTwitterX,BsLinkedin,BsInstagram,BsTelegram } from "react-icons/bs";
import { GiStairsGoal,GiMountainClimbing } from "react-icons/gi";
import { MdOutlineArrowDropDown } from "react-icons/md"; 
import { TiGroup } from "react-icons/ti";
import { ImPointRight } from "react-icons/im";
import { MdOutlineWbIncandescent } from "react-icons/md";
import { PiHandshakeFill } from "react-icons/pi";
import { TbReceiptRupee } from "react-icons/tb";
import { FaPeoplePulling } from "react-icons/fa6";
import menuData from '../menuData';
import Dropdown from './dropdown.jsx';
import IMG3 from '../Images/img3.jpg';
import IMG4 from '../Images/img4.jpg';
import { Link } from 'react-router-dom';
import './Home.css';


function About() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showSubServices, setShowSubServices] = useState(false);
    
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const Subscribe = () => {
        alert("Subscribed Successfully");
    };
  return (
    <div className="about">
        <header className='header'>
            <div className='navbar-1'>
          <div>
            <img src={Logo} alt='logo' className='logo' />
            <h2>For Future Innovation</h2>
          </div>
          <div>
            <h3>VIJAYAWADA INNOVATIVE TECHNOLOGY DEVELOPMENT HUB PRIVATE LIMITED</h3>
            <h2>CIN : U63112AP2025PTC117421</h2>
          </div>
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
                <h4 className='Link'>Team</h4>
                <h4 className='Link' onClick={() => {setShowSubServices(true);setMenuOpen(false)}}>Services <MdOutlineArrowDropDown/></h4>
                <h4><Link to='/CITR' className='Link' onClick={() => setMenuOpen(false)}>CITR</Link></h4>
                <h4><Link to='/contact' className='Link' onClick={() => setMenuOpen(false)}>Contact</Link></h4>
            </div>

            {/* Desktop Menu */}
            <div className='options'>
                <h4><Link to='/' className='Link'>Home</Link></h4>
                <h4><Link to='/about' className='Link'>About Us</Link></h4>
                <h4>Team</h4>
                <div className='service'>
                <h4><Link to='/services' className='Link'>Services</Link></h4>
                <Dropdown menuData={menuData} />
                </div>
                <h4><Link to='/CITR' className='Link'>CITR</Link></h4>
                <h4><Link to='/contact' className='Link'>Contact</Link></h4>
            </div>
            </nav>
        </header>
        {showSubServices && (
            <div className="popup-overlay">
            <div className="popup-box">
                <div className="popup-header">
                    <h3>Our Services</h3>
                    <button className="close-btn" onClick={() => setShowSubServices(false)}>❌</button>
                </div>
                <div className='popup-content'>
                    {Object.keys(menuData[0].items).map((category, index) => (
                    <div key={index} className='popup-category'>
                        <h5>{category}</h5>
                        <ul>
                        {menuData[0].items[category].map((service, i) => (
                            <li key={i}>
                            <Link to={`/services/${encodeURIComponent(service.name)}`} onClick={() => setShowSubServices(false)}>
                                {service.name}
                            </Link>
                            </li>
                        ))}
                        </ul>
                    </div>
                    ))}
                </div>
            </div>
            </div>
        )}
        <div className='A-content'>
            <div className='img-container'>
                <img src={IMG3} alt='img' className='img3'/>
                <div style={{zIndex:"0"}}>
                    <h1>ABOUT US</h1>
                    <p>_________________________</p>
                    <p><b>VIT HUB</b> is your trusted partner, delivering innovative, affordable solutions in creative design, marketing, data analytics, and project development. </p>
                </div>
            </div>
            <div className='story'>
                <div className='we'>
                    <div className='img4'>
                        <img src={IMG4} alt='img' className='img2'/>
                    </div>
                    <div className='img2_matter'>
                        <div className='text-container1'>
                            <div className='text-back1'>Our Story</div>
                            <div className='text-front1'>It's About You</div>
                        </div>
                        <h2>Your Trusted Partner for Growth</h2>
                        <p>
                            <b>VIT HUB</b> is your trusted partner, delivering innovative, affordable solutions in creative design, marketing, data analytics, and project development. 
                            We specialize in helping small and medium businesses overcome challenges and achieve measurable growth with strategies tailored to their unique needs.
                        </p>
                        <p>
                            Our expert team connects you with your audience, optimizes processes, and strengthens your business with precision and creativity. More than a service provider, we’re your trusted partner in transforming vision into success.
                        </p>
                    </div>
                </div>
            </div>
            <div className='mission'>
                <div className='text-container2'>
                    <div className='text-back2'>Mission & Vision</div>
                    <div className='text-front2'>Mission & Vision</div>
                </div>
                <div className='mission1'>
                    <div>
                        <GiStairsGoal className='logo1'/>
                        <h1>Our Mission</h1>
                        <p>
                            Our mission is to empower small and medium businesses with innovative solutions that drive growth, enhance efficiency, and foster creativity. 
                            We are committed to delivering exceptional value through personalized service, strategic insights, and a deep understanding of our clients' needs.
                        </p>
                    </div>
                    <div>
                        <GiMountainClimbing className='logo1'/>
                        <h1>Our Vision</h1>
                        <p>
                            Our vision is to be a leading partner for small and medium businesses, recognized for our innovative solutions and commitment to excellence. 
                            We aspire to create a world where every business has the tools and support they need to thrive in a competitive landscape.
                        </p>
                    </div>
                </div>
            </div>
            <div className='with_us'>
                <div className='text-container3'>
                    <div className='text-back3'>VIT HUB</div>
                    <div className='text-front3'>Why Work With Us?</div>
                </div>
                <div className='with_us1'>
                    <div>
                        <TiGroup className='logo1'/>
                        <h2>Integrity</h2>
                        <p>Integrity is at the core of everything we do — we believe in doing the right thing, always.</p>
                    </div>
                    <div>
                        <ImPointRight className='logo1'/>
                        <h2>Quality</h2>
                        <p>We don’t cut corners — we craft every solution with precision, care, and excellence.</p>
                    </div>
                    <div>
                        <MdOutlineWbIncandescent className='logo1'/>
                        <h2>Innovation</h2>
                        <p>Innovation isn’t just a buzzword for us — it’s how we solve problems, create value, and stay ahead..</p>
                    </div>
                    <div>
                        <PiHandshakeFill className='logo1'/>
                        <h2>Commitment</h2>
                        <p>We’re not just committed to completing the work — we’re committed to your success.</p>
                    </div>
                    <div>
                        <TbReceiptRupee className='logo1'/>
                        <h2>Cost</h2>
                        <p>We offer high-quality solutions at prices that make sense — because great work shouldn’t break the bank.</p>
                    </div>
                    <div>
                        <FaPeoplePulling className='logo1'/>
                        <h2>Support</h2>
                        <p>We don’t just deliver projects — we stand by you with dedicated support at every step.</p>
                    </div>
                </div>
            </div>
            <h1 className='bottom'>"Let’s innovate, empower, and succeed—together."</h1>
        </div>
        <footer className='footer'>
            <div className='footer-up'>
                <div className='contact'>
                <div className='c_title'>
                    <h1>Contact</h1>
                </div>
                <div>
                    <h4><BsFillChatTextFill /><a href='mailto:vitdhub@gmail.com' style={{textDecoration:"none",color:"white"}}> vitdhub@gmail.com</a></h4>
                    <h4><BsTelephoneFill/>+91 8886667850</h4>
                    <h4><BsTelephoneFill/>+91 9100556667</h4>
                    <h4><BsFillPinMapFill /> 5-9-469, Ramanagar katta YSR, Tadigadapa, Poranki, Vijayawada, Andhra Pradesh 521137</h4>
                </div>
                </div>

                    <div className='news_letter'>
                    <div className='c_title'>
                        <h1>News Letter</h1>
                    </div>
                    <p>Subscribe to our newsletter for the latest updates and offers.</p>
                    <textarea placeholder='Drop your E-mail id here' className='input' />
                    <div ><button className='bb' onClick={()=>Subscribe()}>Subscribe</button></div> 
                    </div>

                <div className='Pages'>
                <div className='c_title'>
                    <h1>Pages</h1>
                </div>
                <div className='pages'>
                    <div><Link to='/' className='Link1'>Home</Link></div>
                    <div><Link to='/about' className='Link1'>About</Link></div>
                    <div><Link to='/about' className='Link1'>Team</Link></div>
                    <div><Link to='/services' className='Link1'>Services</Link></div>
                    <div><Link to='/CITR' className='Link1'>CITR</Link></div>
                    <div><Link to='/contact' className='Link1'>Contact</Link></div>
                </div>
                </div>
            </div>

            <div className='footer-down'>
                <img src={Logo} alt='logo' className='logo1' />
                <div className='icons'>
                <a href='https://wa.me/message/OVK73JH6FGKZC1' target='_blank' rel="noopener noreferrer"><BsWhatsapp className='icon' /></a>
                <a href='https://www.facebook.com/share/1C5RWvNczt/' target='_blank' rel="noopener noreferrer"><BsFacebook className='icon' /></a>
                <a href='https://x.com/VITHUB_PVT_LTD?t=2AOtDnRqkNy5NcwNk6G-kg&s=08' target='_blank' rel="noopener noreferrer"><BsTwitterX className='icon' /></a>
                <a href='https://www.linkedin.com/in/vijayawada-innovative-technology-development-hub-private-limited-89635536a' target='_blank' rel="noopener noreferrer"><BsLinkedin className='icon' /></a>
                <a href='https://www.instagram.com/vithub_innovations?utm_source=qr&igsh=NTNza2RubnIyY2Vr' target='_blank' rel="noopener noreferrer"><BsInstagram className='icon' /></a>
                <a href='t.me/vithubinnovations' target='_blank' rel="noopener noreferrer"><BsTelegram className='icon' /></a>
                </div>
            </div>
        </footer>
    </div>
  );
}
export default About;