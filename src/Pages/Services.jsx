import Logo from '../Images/logo.jpg';
import './Services.css';
import './Home.css';
import { 
  BsTelephoneFill, BsFillChatTextFill, BsFillPinMapFill, 
  BsWhatsapp, BsFacebook, BsTwitterX, BsLinkedin, BsInstagram, BsTelegram 
} from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";
import IMG7 from '../Images/img7.jpg';
import ICON1 from '../Icon1.svg';
import ICON2 from '../Icon2.svg';
import ICON3 from '../Icon3.svg';
import ICON4 from '../Icon4.svg';
import ICON5 from '../Icon5.svg';
import ICON6 from '../Icon6.svg';
import Img9 from '../Images/img9.webp';
import Img10 from '../Images/img10.jpg';
import Img11 from '../Images/img11.jpg';
import Img12 from '../Images/img12.jpg';
import Img13 from '../Images/img13.jpg';
import Img14 from '../Images/img14.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './dropdown';
import menuData from '../menuData.js';

function Services() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSubServices, setShowSubServices] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const Subscribe = () => {
    alert("Subscribed Successfully");
  };

  return (
    <div>
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
              <Dropdown menuData={menuData}/>
            </div>
            <h4><Link to='/CITR' className='Link'>CITR</Link></h4>
            <h4><Link to='/contact' className='Link'>Contact</Link></h4>
          </div>
        </nav>
      </header>

      {/* Sub-services Popup (Mobile Only) */}
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

      <div className='S-content'>
        <div>
          <img src={IMG7} alt='img' className='img1'/>
        </div>
        <div className='s-text'>
          <h1>Empowering brands with Creativity and Innovation</h1>
          <p>We immerse ourselves in your brand’s essence to craft bold, refined, and impactful creative solutions. 
          By fusing strategy with artistry, we deliver designs and content that captivate your audience and position your brand as a leader in a competitive world.</p>
        </div>

        {/* Services Boxes */}
        <div className='s-boxes'>
          <h1 style={{borderBottom:" 2px solid white",width:"300px"}}>Services we offered</h1>
          <div className='s-box-container'>
            <div className='s-box'>
              <div className='s-box-header'>
                <img src={ICON1} alt='Icon1'/>
                <div className='s-box-title'> Graphic Design</div>
              </div>
              <div className='s-box-description'>From logo design to full branding kits, we craft visually stunning materials that capture your brand’s essence and make a lasting impression. </div>
            </div>
            <div className='s-box'>
              <div className='s-box-header'>
                <img src={ICON2} alt='Icon1'/>
                <div className='s-box-title'> Content Creation</div>
              </div>
              <div className='s-box-description'>Custom website designs, responsive interfaces, and interactive landing pages that enhance user experience and drive results. </div>
            </div>
            <div className='s-box'>
              <div className='s-box-header'>
                <img src={ICON3} alt='Icon1'/>
                <div className='s-box-title'> Logo Design</div>
              </div>
              <div className='s-box-description'>Create professional promotional videos, explainer animations, and social media visuals that captivate and engage your audience. </div>
            </div>
            <div className='s-box'>
              <div className='s-box-header'>
                <img src={ICON4} alt='Icon1'/>
                <div className='s-box-title'> Web Development</div>
              </div>
              <div className='s-box-description'>Engage your audience with high-quality blogs, articles, social media posts, and infographics tailored to your brand’s goals and audience.</div>
            </div>
            <div className='s-box'>
              <div className='s-box-header'>
                <img src={ICON5} alt='Icon1'/>
                <div className='s-box-title'> UI/UX Design</div>
              </div>
              <div className='s-box-description'>Designing intuitive and user-friendly interfaces that prioritize seamless navigation and exceptional user experience. </div>
            </div>
            <div className='s-box'>
              <div className='s-box-header'>
                <img src={ICON6} alt='Icon1'/>
                <div className='s-box-title'> Custom Illustrations</div>
              </div>
              <div className='s-box-description'>Bring your vision to life with unique, hand-crafted illustrations designed to tell your brand’s story creatively. </div>
            </div>
          </div>
        </div>

        {/* Approach */}
        <div className='approach'>
          <h1>How we Approach?</h1>
          <div className='a-container'>
            <div className='a-box' >
              <img src={Img9} alt='img9' className='a-img'/>
              <div>
                <h3>Brand Understanding</h3>
                <p>We dive deep into your brand’s vision and goals.</p>
              </div>
            </div>
            <div className='a-box' >
              <img src={Img10} alt='img9' className='a-img'/>
              <div>
                <h3>Brand Understanding</h3>
                <p>We dive deep into your brand’s vision and goals.</p>
              </div>
            </div>
            <div className='a-box' >
              <img src={Img11} alt='img9' className='a-img'/>
              <div>
                <h3>Brand Understanding</h3>
                <p>We dive deep into your brand’s vision and goals.</p>
              </div>
            </div>
            <div className='a-box' >
              <img src={Img12} alt='img9' className='a-img'/>
              <div>
                <h3>Brand Understanding</h3>
                <p>We dive deep into your brand’s vision and goals.</p>
              </div>
            </div>
            <div className='a-box' >
              <img src={Img13} alt='img9' className='a-img'/>
              <div>
                <h3>Brand Understanding</h3>
                <p>We dive deep into your brand’s vision and goals.</p>
              </div>
            </div>
            <div className='a-box' >
              <img src={Img14} alt='img9' className='a-img'/>
              <div>
                <h3>Brand Understanding</h3>
                <p>We dive deep into your brand’s vision and goals.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className='s-quote'>
          <h1>"Let’s innovate, empower, and succeed—together."</h1>
          <button><Link to='/contact' className='Link1'>Let's Connect</Link></button>
        </div>
      </div>

      {/* Footer (unchanged) */}
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
            <a href='https://t.me/vithubinnovations' target='_blank' rel="noopener noreferrer"><BsTelegram className='icon' /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Services;
