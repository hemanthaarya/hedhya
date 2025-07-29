import { useParams } from 'react-router-dom';
import menuData from '../menuData';
import Logo from '../Images/logo.jpg';
import './Services.css';
import { useState } from 'react';
import './Home.css'
import { BsTelephoneFill,BsFillChatTextFill,BsFillPinMapFill,BsWhatsapp,BsFacebook,BsTwitterX,BsLinkedin,BsInstagram,BsTelegram } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Dropdown from './dropdown.jsx';

function ServiceDetail() {
  const [menuOpen, setMenuOpen] = useState(false);
          
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const { service } = useParams();
  const decodedService = decodeURIComponent(service);
  const Subscribe = () => {
        alert("Subscribed Successfully");
    };
  let foundService = null;

  for (const menu of menuData) {
    for (const category in menu.items) {
      const match = menu.items[category].find(item => item.name === decodedService);
      if (match) {
        foundService = match;
        break;
      }
    }
    if (foundService) break;
  }

  if (!foundService) {
    return <h2 style={{ padding: '2rem' }}>Service not found</h2>;
  }

  return (
    <div>
      <header className='header'>
        <div className='navbar-1'>
          <div>
            <img src={Logo} alt='logo' className='logo' />
            <h2>For Future Innovation</h2>
          </div>
          <div>
            <h3>Vijayawada Innovative Technology Development Hub Private Limited</h3>
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
            <h4><Link to='/about' className='Link' onClick={() => setMenuOpen(false)}>Team</Link></h4>
            <h4><Link to='/services' className='Link' onClick={() => setMenuOpen(false)}>Services</Link></h4>
            <h4><Link to='/CITR' className='Link' onClick={() => setMenuOpen(false)}>CITR</Link></h4>
            <h4><Link to='/contact' className='Link' onClick={() => setMenuOpen(false)}>Contact</Link></h4>
          </div>

          {/* Desktop Menu */}
          <div className='options'>
            <h4><Link to='/' className='Link'>Home</Link></h4>
            <h4><Link to='/about' className='Link'>About Us</Link></h4>
            <h4><Link to='/about' className='Link'>Team</Link></h4>
            <div className='service'>
              <h4><Link to='/services' className='Link'>Services</Link></h4>
              <Dropdown menuData={menuData} />
            </div>
            <h4><Link to='/CITR' className='Link'>CITR</Link></h4>
            <h4><Link to='/contact' className='Link'>Contact</Link></h4>
          </div>
        </nav>
      </header>
      <div style={{ padding: '2rem', margin: 'auto' }}>
        <h1 style={{color:"#034268"}}>{foundService.name}</h1>
        {foundService.image && (
          <img
            src={foundService.image}
            alt={foundService.name}
            style={{ maxWidth: '100%', marginBottom: '1rem' }}
            className='img1'
          />
        )}
        <p dangerouslySetInnerHTML={{ __html: foundService.description }} />
        <div className="page-center">
            <Link to="/contact" className="button5 Link1">Connect With us</Link>
        </div>
      </div>
      <footer className='footer'>
            <div className='footer-up'>
                <div className='contact'>
                <div className='c_title'>
                    <h1>Contact</h1>
                </div>
                <div>
                    <h4><BsFillChatTextFill /><a href='mailto:vitdhub@gmail.com' style={{textDecoration:"none",color:"white"}}> vitdhub@gmail.com</a></h4>
                    <h4><BsFillPinMapFill /> Vijayawada, AndhraPradesh, 521137</h4>
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

export default ServiceDetail;
