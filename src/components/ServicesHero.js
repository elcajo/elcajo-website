import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { IconContext } from 'react-icons/lib';
import { VscCode } from "react-icons/vsc";
import { VscDeviceMobile } from "react-icons/vsc";
import { VscPaintcan } from "react-icons/vsc";
import { VscShield } from "react-icons/vsc";
import { Link } from 'react-router-dom';


function ServicesHero() {
  return (
    <IconContext.Provider value={{ color: '#ffcc00', size: 200 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <div className='pricing__container'>
            <Link to='/webdev' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <VscCode />
                </div>
                <h4>Web Dev</h4>
                <ul className='pricing__container-features'>
                  <li>Writing well designed, testable, efficient code by using best software development practices. Creating website layout/user interfaces by using standard HTML/CSS practices. Integrating data from various back-end services and databases.</li>
                </ul>
              </div>
            </Link>
            <Link to='/appdev' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <VscDeviceMobile />
                </div>
                <h4>App Dev</h4>
                <ul className='pricing__container-features'>
                  <li>Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones.</li>
                </ul>
              </div>
            </Link>
            <Link to='/multimedia' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <VscPaintcan />
                </div>
                <h4>Multimedia</h4>
                <ul className='pricing__container-features'>
                  <li>We pride ourselves on the ability to work closely with our customers and produce the perfect layout, color palette and design elements that bring your concept to life.</li>
                </ul>
              </div>
            </Link>
            <Link to='/datasecurity' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <VscShield />
                </div>
                <h4>Data Security</h4>
                <ul className='pricing__container-features'>
                  <li>Our security services and proprietary security management tools are certified as reliable and effective by the companies focusing on business cybersecurity. Our services are essentially based on the best practices provided by the certified professionals.</li>
                </ul>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default ServicesHero;