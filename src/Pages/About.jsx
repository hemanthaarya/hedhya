import Logo from '../logo.png';
import './vit.css';
import { BsTelephoneFill,BsFillChatTextFill,BsFillPinMapFill,BsWhatsapp,BsFacebook,BsTwitterX,BsLinkedin } from "react-icons/bs";
import { GiStairsGoal,GiMountainClimbing } from "react-icons/gi";
import { TiGroup } from "react-icons/ti";
import { ImPointRight } from "react-icons/im";
import { MdOutlineWbIncandescent } from "react-icons/md";
import { PiHandshakeFill } from "react-icons/pi";
import { TbReceiptRupee } from "react-icons/tb";
import { FaPeoplePulling } from "react-icons/fa6";
import menuData from '../menuData';
import Dropdown from './dropdown.jsx';
import IMG3 from '../img3.png';
import IMG4 from '../img4.png';


function About() {
  return (
    <div className="about">
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
        <div className='A-content'>
            <div className='img-container'>
                <img src={IMG3} alt='img' className='img3'/>
                <div>
                    <h1>ABOUT US</h1>
                    <p>_________________________</p>
                    <p><b>VIT HUB</b> is your trusted partner, delivering innovative, affordable solutions in creative design, marketing, data analytics, and project development. </p>
                </div>
            </div>
            <div className='story'>
                <div className='we_are'>
                    <div className='img2_matter'>
                        <div className='text-container'>
                            <div className='text-back'>Our Story</div>
                            <div className='text-front'>It's About You</div>
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
                    <div className='img4'>
                        <img src={IMG4} alt='img' className='img2'/>
                    </div>
                </div>
            </div>
            <div className='mission'>
                <div className='text-container1'>
                    <div className='text-back1'>Mission & Vision</div>
                    <div className='text-front1'>Mission & Vision</div>
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
                <div className='text-container2'>
                    <div className='text-back2'>VIT HUB</div>
                    <div className='text-front2'>Why Work With Us?</div>
                </div>
                <div className='with_us1'>
                    <div>
                        <TiGroup className='logo1'/>
                        <h2>Integrity</h2>
                        <p>We work with honesty and transparency to earn your trust.</p>
                    </div>
                    <div>
                        <ImPointRight className='logo1'/>
                        <h2>Quality</h2>
                        <p>We work with honesty and transparency to earn your trust.</p>
                    </div>
                    <div>
                        <MdOutlineWbIncandescent className='logo1'/>
                        <h2>Innovation</h2>
                        <p>We work with honesty and transparency to earn your trust.</p>
                    </div>
                    <div>
                        <PiHandshakeFill className='logo1'/>
                        <h2>Commitment</h2>
                        <p>We work with honesty and transparency to earn your trust.</p>
                    </div>
                    <div>
                        <TbReceiptRupee className='logo1'/>
                        <h2>Cost</h2>
                        <p>We work with honesty and transparency to earn your trust.</p>
                    </div>
                    <div>
                        <FaPeoplePulling className='logo1'/>
                        <h2>Support</h2>
                        <p>We work with honesty and transparency to earn your trust.</p>
                    </div>
                </div>
            </div>
            <h1 className='bottom'>"Let’s innovate, empower, and succeed—together."</h1>
        </div>
        <div className='footer'>
            <div className='footer-up'>
                <div className='contact'>
                    <div className='c_title'>
                        <div></div>
                        <h1>Contact</h1>
                    </div>
                    <div>
                        <h4><BsFillChatTextFill/>vitdhub@gmail.com</h4>
                        <h4><BsFillPinMapFill/>Vijayawada, AndhraPradesh, 521137</h4>
                    </div>
                </div>
                <div className='news_letter'>
                    <div className='c_title'>
                        <div></div>
                        <h1>News Letter</h1>
                    </div>
                    <p>Subscribe to our newsletter for the latest updates and offers.</p>
                    <textarea type='description' placeholder='Subscribe to our channel' className='input'/>
                </div>
                <div className='Pages'>
                    <div className='c_title'>
                        <div></div>
                        <h1>Pages</h1>
                    </div>
                    <div>
                        <h4>Home</h4>
                        <h4>About Us</h4>
                        <h4>Services</h4>
                        <h4>Blogs</h4>
                        <h4>Contact</h4>
                    </div>
                </div>
            </div>
            <div className='footer-down'>
                <img src={Logo} alt='logo' className='logo1'/>
                <div className='icons'>
                    <BsWhatsapp className='icon'/>
                    <BsFacebook className='icon'/>
                    <BsTwitterX className='icon'/>
                    <BsLinkedin className='icon'/>
                </div>
            </div>
        </div>
    </div>
  );
}
export default About;