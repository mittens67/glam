import React from 'react';
import { FooterOverlay,Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">14 Lotus Avenue, Bangalore, Karnataka 560001, India</p>
        <p className="p__opensans">+91 98765 43210</p>
        <p className="p__opensans">+91 87654 32109</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.glam} alt="footer_logo" />
        <p className="p__opensans">&quot;Don't Be Afraid To Sparkle.&quot;</p>
        <img src={images.scissors} alt='scissors' className="scissors__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Saturday:</p>
        <p className="p__opensans">10:00 AM - 8:00 PM</p>
        <p className="p__opensans">Sunday:</p>
        <p className="p__opensans">Closed</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 Glam. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
