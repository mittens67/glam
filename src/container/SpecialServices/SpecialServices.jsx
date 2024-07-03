import React from 'react';
import { SubHeading, ServiceItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialServices.css';

const SpecialServices = () => (
  <div className='app__specialMenu flex__center section__padding' id='services'>
    <div className='app__specialMenu-title'>
      <SubHeading title="Give Yourself The Ultimate Makeover" />
      <h1 className='headtext__cormorant'>Special Services</h1>
    </div>
    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu-menu_heading'>Makeup & Hair</p>
        <div className='app__specialMenu_menu_items'>
          {data.makeup.map((makeup, index) => (
            <ServiceItem key={makeup.title + index} title={makeup.title} price={makeup.price} tags={makeup.tags} />
          ))}
        </div>
      </div>
      <div className='app__specialMenu-menu_img'>
        <img src={images.brush} alt='makeup brush' />
      </div>
      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu-menu_heading'>Packages</p>
        <div className='app__specialMenu_menu_items'>
          {data.packages.map((pkg, index) => (
            <ServiceItem key={pkg.title + index} title={pkg.title} price={pkg.price} tags={pkg.tags} />
          ))}
        </div>
      </div>
    </div>
    <div style={{marginTop: '15px'}}>
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialServices;
