import React from 'react';
import Logo from '../logo.png';
import IMG from '../img1.png';
import './vit.css';
import { BsTelephoneFill } from "react-icons/bs";
function Home() {
  return (
    <div className='main'>
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
                <h4>Services</h4>
                <h4>Blogs</h4>
                <h4>Contact</h4>
            </div>
        </div>
        <div className='main-content'>
            <img src={IMG} alt='img' className='img'/>
        </div> 
    </div>
  );
}

export default Home;