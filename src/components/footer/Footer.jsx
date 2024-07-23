import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import googleImg from './google.png'; // Adjust the path as needed
import appStoreImg from './image.png'; // Adjust the path as needed
import ima from './img/image.png'
import QR from "./img/qr/image.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section subscribe">
                <h4>Exclusive</h4>
                <h2>Subscribe</h2>
                <p>Get 10% off your first order</p>
                <form>
                    <input 
                        style={{
                            padding: "10px", 
                            backgroundColor: "black",
                            border: "2px solid white", 
                            borderRight: "none", 
                            margin: "7px 0",
                            width:"170px"
                        }} 
                        type="email" 
                        placeholder="Enter your email" 
                    />
                    <button 
                        type="submit" 
                        style={{
                            border: "2px solid white",
                            borderLeft: "none",
                            
                            cursor: "pointer",
                            padding:"17px ",
                            backgroundColor: "black",
                            height:"48px",
                            
                        }}
                    >
                        <img src= {ima}alt="Submit" style={{ width: '100%', height: '100%' }} />
                    </button>
                </form>
            </div>
            <div className="footer-section support">
                <h4>Support</h4>
                <p style={{padding: "10px 0"}}>Exclusive, IT Park, Chandigarh</p>
                <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
                <p style={{padding: "10px 0"}}>+88015-88888-9999</p>
            </div>
            <div className="footer-section account">
                <h4>Account</h4>
                <ul>
                    <li><a href="/account">My Account</a></li>
                    <li><a href="/login">Login / Register</a></li>
                    <li><a href="/cart">Cart</a></li>
                    <li><a href="/wishlist">Wishlist</a></li>
                    <li><a href="/shop">Shop</a></li>
                </ul>
            </div>
            <div className="footer-section quick-links">
                <h4>Quick Link</h4>
                <ul>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/terms-of-use">Terms Of Use</a></li>
                    <li><a href="/faq">FAQ</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
          
            <div className="footer-section download-app">
                <h4>Download App</h4>
                <p>Save $3 with App New User Only</p>
                <div className='flex '>
                <div className="image" style={{margin:"10px 4px",width:"83px"}} >

<img src={QR} alt="QR code" srcset="" />
</div>
                <div className="app-links">
                    <a href="#!"><img src={googleImg} alt="Google Play" /></a>
                    <a href="#!"><img src={appStoreImg} alt="App Store" /></a>
                </div>
                </div>
                <div className="social-links">
                    <a href="#!"><FaFacebookF /></a>
                    <a href="#!"><FaTwitter /></a>
                    <a href="#!"><FaInstagram /></a>
                    <a href="#!"><FaLinkedinIn /></a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© Copyright Rimel 2022. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
