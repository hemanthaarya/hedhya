import { Link, useParams } from "react-router-dom";
import menuData from '../menuData.js';
import { useState } from "react";
import Logo from '../Images/logo.jpg';
import './Home.css';
import { BsTelephoneFill,BsFillChatTextFill,BsFillPinMapFill,BsWhatsapp,BsFacebook,BsTwitterX,BsLinkedin,BsInstagram,BsTelegram } from "react-icons/bs";
import Dropdown from './dropdown.jsx';
import { MdOutlineArrowDropDown } from "react-icons/md"; 
import IMG15 from '../Images/img15.jpg';
import IMG16 from '../Images/img16.jpg';
import Educatio_desc from '../Education_desc.js';
import './Home.css';
import './Education.css';

function CITR(){
    const [menuOpen, setMenuOpen] = useState(false);
    const [showSubServices, setShowSubServices] = useState(false);
    const { title } = useParams();
    const Subscribe = () => {
        alert("Subscribed Successfully");
    };

    const toggleMenu = () => setMenuOpen(!menuOpen);

    // ✅ If URL contains :id, show detail view
    if (title !== undefined) {
        const item = Object.values(Educatio_desc).find((data) => data.title === title);
        if (!item) return <div className="e-content"><h2>Item not found</h2></div>;

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
                        <h4 className='Link' onClick={() => setShowSubServices(true)}>Services <MdOutlineArrowDropDown/></h4>
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
                                <Link to={`/services/${encodeURIComponent(service.name)}`}>
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
            <div>
                <div style={{ padding: '2rem', margin: 'auto' }}>
                    <h1 style={{textAlign:"center", color:"#034268"}}>{item.title}</h1>
                    <img src={item.big_img} alt={item.title} className="img1" />
                    <p dangerouslySetInnerHTML={{ __html: item.Desc }} />
                    <div className="page-center">
                        <Link to="/contact" className="button5 Link1">Connect With us</Link>
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

    // ✅ Default CITR Home Page
    return(
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
                        <h4 className='Link' onClick={() => setShowSubServices(true)}>Services <MdOutlineArrowDropDown/></h4>
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
                        <h4><Link to='/Education' className='Link'>CITR</Link></h4>
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
                                <Link to={`/services/${encodeURIComponent(service.name)}`}>
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

            <div className="e-content">
                <div className='img-container'>
                    <img src={IMG15} alt='ig1' className='img3'/>
                </div>

                <div className='story'>
                    <div className='we1'>
                        <div>
                            <img src={IMG16} alt='img' className='img4'/>
                        </div>
                        <div className='img2_matter'>
                            <h2>About CITR</h2>
                            <p>
                                The <b>Centre for Innovation and Technical Research (CITR)</b> is a dedicated hub fostering creativity, interdisciplinary collaboration, and high-impact research aimed at solving real-world challenges. 
                                Established with a vision to bridge the gap between academia, industry, and society, the centre plays a pivotal role in driving technological advancements, entrepreneurial ventures, innovative practices and sustainable development and <b>CITR</b> is committed to shaping the future with purpose-driven innovations.
                            </p>
                            <button className='button'><Link to='/contact' className='Link1'>Connect With Us</Link></button>
                        </div>
                    </div>
                </div>

                <div className='s-boxes'>
                    <h1 style={{ borderBottom: '2px solid white', width: '300px' }}>
                        Centre for Innovation and Technical Research
                    </h1>

                    <div className='s-box-container'>
                        {Object.values(Educatio_desc).map((item) => (
                            <div className='s-box1' key={item.id}>
                                <div className='s-box-header'>
                                    <img src={item.Short_img} alt={item.title} className='Icon' />
                                    <div className='s-box-title'>{item.title}</div>
                                </div>
                                <div className='s-box-description'>{item.short_desc}</div>
                                <Link to={`/CITR/${item.title}`} className='button5 Link1'>Explore More</Link>
                            </div>
                        ))}
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

export default CITR;
