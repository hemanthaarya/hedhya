import React, { useState } from 'react';
import Logo from '../Images/logo.jpg';
import IMG2 from '../Images/img2.jpg';
import ImageSlider from './ImageScroll.jsx';
import './Home.css';
import { BsTelephoneFill,BsFillChatTextFill,BsFillPinMapFill,BsWhatsapp,BsFacebook,BsTwitterX,BsLinkedin,BsInstagram,BsTelegram } from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Dropdown from './dropdown.jsx'; 
import Logo1 from '../Images/s-box1.jpg';
import Logo2 from '../Images/s-box2.jpg';
import Logo3 from '../Images/s-box3.jpg';
import Logo4 from '../Images/s-box4.jpg';
import { Link } from 'react-router-dom';
import menuData from '../menuData.js';
import { FaSearchengin,FaRegHandshake,FaRegThumbsUp } from "react-icons/fa6";
import { GiMountedKnight } from "react-icons/gi";
import Portfolio_Data from '../Portfolio_Data.js';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSubServices, setShowSubServices] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const Subscribe = () => {
        alert("Subscribed Successfully");
    };

  return (
    <div className='main'>
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


          <div className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
            <h4><Link to='/' className='Link' onClick={() => setMenuOpen(false)}>Home</Link></h4>
            <h4><Link to='/about' className='Link' onClick={() => setMenuOpen(false)}>About Us</Link></h4>
            <h4 className='Link'>Team</h4>
            <h4 className='Link' onClick={() => {setShowSubServices(true);setMenuOpen(false)}}>Services <MdOutlineArrowDropDown/></h4>
            <h4><Link to='/CITR' className='Link' onClick={() => setMenuOpen(false)}>CITR</Link></h4>
            <h4><Link to='/contact' className='Link' onClick={() => setMenuOpen(false)}>Contact</Link></h4>
            </div>


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

      <main className='h-content'>
        <section className='h-img-container'>
          <ImageSlider/>
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
              {logo: Logo1, title: "Graphic Design", desc: "We bring your ideas to life with creative, high-quality designs that reflect your brand’s personality. From logos to promotional materials, we craft visuals that make a lasting impression and drive engagement."},
              {logo: Logo2, title: "Web & App Development", desc: "We build fast, responsive, and scalable web and mobile applications tailored to your business needs. From concept to deployment, our solutions deliver seamless user experiences and drive real results."},
              {logo: Logo3, title: "Digital Marketing", desc: "We boost your online presence with targeted digital strategies — from SEO and social media to content marketing and ads.Our goal: attract, engage, and convert your ideal audience."},
              {logo: Logo4, title: "Data Analytics", desc: "We turn raw data into actionable insights that drive smarter decisions. From dashboards to predictive models, our analytics solutions help you uncover trends, optimize performance, and fuel business growth."}
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
        <section>
          <div className='s-title' style={{textAlign:'center'}}>
            <div className='s-text-container'>
              <div className='s-text-back'>Portfolio</div>
              <div className='s-text-front'>Our Portfolio</div>
            </div>
          </div>
            <table className='portfolio'>
              <th>Company name</th>
              <th>Company Logo</th>
              {Portfolio_Data.map(({id,company_name,company_logo})=>(
                <tr key={id}>
                  <td>{company_name}</td>
                  <td><img src={company_logo}/></td>
                </tr>
              ))}
            </table>
        </section>
        <div className='n-cont'>
          <div className='n-container'>
              <div>
                  <FaSearchengin className='IC'/>
                  <h3>Brand Identity</h3>
              </div>
              <div>
                  <FaRegHandshake className='IC'/>
                  <h3>Customer Engagement</h3>
              </div>
              <div>
                  <FaRegThumbsUp className='IC'/>
                  <h3>Professional Appeal</h3>
              </div>
              <div style={{border:'none'}}>
                  <GiMountedKnight className='IC'/>
                  <h3>Competitive Edge</h3>
              </div>
          </div>
      </div>
      </main>

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

export default Home;
