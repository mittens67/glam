import React from 'react';
import { SubHeading} from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper__info'>
      <SubHeading title="contact" />
      <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Find Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>14 Lotus Avenue, Bangalore, Karnataka 560001, India</p>
        <p className='p__cormorant' style={{color: '#DCCA87', margin: '2rem 0'}}>Opening Hours </p>
        <p className='p__opensans'>Mon - Sat: 10:00 AM - 8:00 PM</p>
        <p className='p__opensans'>Sun: Closed</p>
      </div>
      <button className='custom__button' style={{marginTop: '2rem'}}>Visit Us</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.studio} alt='Studio'/>
    </div>
  </div>
);

export default FindUs;
