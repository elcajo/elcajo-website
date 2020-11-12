import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { IconContext } from 'react-icons/lib';
import { VscCode } from "react-icons/vsc";
import { VscDeviceMobile } from "react-icons/vsc";
import { VscPaintcan } from "react-icons/vsc";
import { VscShield } from "react-icons/vsc";
import { Link } from 'react-router-dom';

import janedoe from '../images/janedoe.png';
import johndoe from '../images/johndoe.png';
import jackdoe from '../images/jackdoe.png';

function OurTeam() {
  return (
    <IconContext.Provider value={{ color: '#ffcc00', size: 200 }}>
      <div className='pricing__section white'>
        <div className='pricing__wrapper'>
          <div className='pricing__container'>
            <Link to='/profile1' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <img src={janedoe} />
                </div>
                <h4 className='dark'>Jane Doe</h4>
                <p className='dark'>UI/UX</p>
                <ul className='pricing__container-features dark'>
                  <li>Gathering and evaluating user requirements, in collaboration with product managers and engineers. Illustrating design ideas using storyboards, process flows and sitemaps. Designing graphic user interface elements, like menus, tabs and widgets.</li>
                </ul>
              </div>
            </Link>
            <Link to='/profile2' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                <img src={johndoe} />
                </div>
                <h4 className='dark'>John Doe</h4>
                <p className='dark'>Aspiring Developer</p>
                <ul className='pricing__container-features dark'>
                  <li>The primary responsibility of a Full Stack Developer includes designing user interactions on websites, developing servers and databases for website functionality and coding for mobile platforms. Particular responsibilities often include: Developing front end website architecture.</li>
                </ul>
              </div>
            </Link>
            <Link to='/pagethatdoesntexist' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                <img src={jackdoe} />
                </div>
                <h4 className='dark'>Jack Doe</h4>
                <p className='dark'>Creative Director</p>
                <ul className='pricing__container-features dark'>
                  <li>The creative director guides all projects and is responsible for the overall quality of work produced by the creative department. ... Lead and direct the creative team in the production of all marketing collateral. Ensure visual communication and brand standards are met.</li>
                </ul>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default OurTeam;