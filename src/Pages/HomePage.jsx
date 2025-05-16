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
                <div className='service'><h4>Services</h4>
                    <div className='dropdown'>
                        <div className='graphic'>
                            <h2>Graphic Designing</h2>
                            <ul>
                                <li>Logo Design & Brand Guidelines</li>
                                <li>Social Media templates & Creatives</li>
                                <li>Posters, Flyers & Brochures</li>
                                <li>Business Cards & Corporative Stationery</li>
                                <li>UI/UX Design for Web & App Interfaces</li>
                            </ul>
                        </div>
                        <div className='web'>
                            <h2>Web & App Development</h2>
                            <ul>
                                <li>Web Design & Devolopment</li>
                                <li>Landing pages & Portfolio Sites</li>
                                <li>Android & iOS App Development</li>
                                <li>Cross Platform App Development</li>
                                <li>Backend Development & API Integration</li>
                                <li>Performance Optimization & Maintenance</li>
                            </ul>
                        </div>
                        <div className='marketing'>
                            <h2>Marketing services</h2>
                            <ul>
                                <li>Social Media Strategy & Management</li>
                                <li>Search Engine Optimization</li>
                                <li>Google Ads & Paid Campaigns</li>
                                <li>Email Marketing</li>
                                <li>Bulk SMS Campaigns</li>
                                <li>Content Creation & Scheduling</li>
                                <li>Performance Monitoring & Analytics</li>   
                            </ul>
                        </div>
                        <div className='data'>
                            <h2>Data Analytics</h2>
                            <ul>
                                <li>Data Collection & Cleaning</li>
                                <li>Dashboard Creation</li>
                                <li>Customer & Sales Analytics</li>
                                <li>Predictive & Trend Analysis</li>
                                <li>Data Visualization & Custom Reports</li>
                                <li>Business Intelligence Solutions</li>
                            </ul>
                        </div>
                    </div>
                </div>
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