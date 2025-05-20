import React from 'react';
import Logo from '../logo.png';
import IMG1 from '../img1.png';
import IMG2 from '../img2.png';
import './vit.css';
import { BsTelephoneFill } from "react-icons/bs";
import menuData from '../menuData';
import Dropdown from './dropdown.jsx';
import Logo1 from '../s-box1.png';
import Logo2 from '../s-box2.png';
import Logo3 from '../s-box3.png';
import Logo4 from '../s-box4.png';
function Home() {
  return (
    <div className='main'>
        <div className='header'>
            <div className='navbar-1'>
                <img src={Logo} alt='logo' className='logo'/>
                <div className='details'>
                    <BsTelephoneFill style={{width:'30px',height:'50px'}}/>
                    <h3>+91 8886667850</h3> 
                    <button className='button'>
                        Get a Quote
                    </button>
                </div>
            </div>
            <div className='navbar-2'>
                <div className='options'>
                    <h4>Home</h4>
                    <h4>About Us</h4>
                    <div className='service'><h4>Services</h4>
                            <Dropdown menuData={menuData}/>
                    </div>
                    <h4>Blogs</h4>
                    <h4>Contact</h4>
                </div>
            </div>
        </div>
        <div className='main-content'>
            <div>
                <img src={IMG1} alt='img' className='img1'/>
            </div>
            <div className='we_are'>
                <div className='img2'>
                    <img src={IMG2} alt='img' className='img2'/>
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
                    <button className='button'>About us</button>
                </div>
            </div>
            <div className='services'>
                <div className='s-title'>
                    <div className='s-text-container'>
                        <div className='s-text-back'>Services</div>
                        <div className='s-text-front'>Our Services</div>
                    </div>
                    <h2>___________</h2>
                </div>
                <div className='s-box'>
                    <div className='s-box-1'>
                        <img src={Logo1} alt="logo" className='logo-1'/>
                        <h3>Graphic Design</h3>
                        <p>We create stunning visuals that captivate and engage your audience, enhancing your brand identity.</p>
                        <button className='button'>Read More</button>
                    </div>
                    <div className='s-box-1'>
                        <img src={Logo2} alt="logo" className='logo-1'/>
                        <h3>Web & App Development</h3>
                        <p>We create stunning visuals that captivate and engage your audience, enhancing your brand identity.</p>
                        <button className='button'>Read More</button>
                    </div>
                    <div className='s-box-1'>
                        <img src={Logo3} alt="logo" className='logo-1'/>
                        <h3>Marketing Servies</h3>
                        <p>We create stunning visuals that captivate and engage your audience, enhancing your brand identity.</p>
                        <button className='button'>Read More</button>
                    </div>
                    <div className='s-box-1'>
                        <img src={Logo4} alt="logo" className='logo-1'/>
                        <h3>Data Analytics</h3>
                        <p>We create stunning visuals that captivate and engage your audience, enhancing your brand identity.</p>
                        <button className='button'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
        
         
    </div>
  );
}

export default Home;