import React from 'react';
import './DetailSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function DetailSection({
  bgColor,
  topLine,
  topLineColor,
  lightText,
  lightTextDesc,
  headline,
  description,
  dir,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  return (
    <>
      <div
        className={bgColor === 'yellow' ? 'home__hero-section yellowBg' 
        : bgColor === 'aqua' ? 'home__hero-section aquaBg' 
        : bgColor === 'green' ? 'home__hero-section greenBg' 
        : bgColor === 'red' ? 'home__hero-section redBg' 
        : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'> 
                <div className={topLineColor === 'white' ? 'top-line light' 
        : topLineColor === 'yellow' ? 'top-line yellowBg' 
        : topLineColor === 'aqua' ? 'top-line aquaBg' 
        : 'top-line dark'} >{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                <Link 
                  to={dir === 'subscribe' ? '/subscribe' 
                  : dir === 'achievements' ? '/achievements' 
                  : dir === 'home' ? '/elcajo-website' 
                  : '/error404'}>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={img} alt={alt} className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailSection;