import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

import elcajologo from '../images/elcajologo.png';

function Footer () {
	return(
		<div className='footer-container' >
			<section className="footer-subscription">
				<p className="footer-subscription-heading">
				Subscribe to receive a weekly newsletter of our service offers and updates
				</p>
				<div className="input-areas">
					<form>
						<input 
							type='email'
							name='email'
							placeholder='Your Email'
							className='footer-input'
						/>
						<Link to='/subscribe' >
						<Button buttonStyle='btn--outline'>Subscribe</Button>
						</Link>
					</form>
				</div>
			</section>
			<div className='footer-links' >
				<div className='footer-link-wrapper' >
					<div className='footer-link-items'>
						<h2>Achievements</h2>
						<Link to='/automation' >Automation</Link>
						<Link to='/community' >Community</Link>
						<Link to='/award' >Awards</Link>
						<Link to='/pioneer' >Pioneer</Link>
						<Link to='/businesspartnerships' >Business Partnerships</Link>
					</div>
					<div className='footer-link-items'>
						<h2>Services</h2>
						<Link to='/webdev' >Web Development</Link>
						<Link to='/appdev' >Mobile Apps Development</Link>
						<Link to='/multimedia' >Multimedia</Link>
						<Link to='/datasecurity' >Data Security</Link>
						<Link to='/error404' >Terms of Service</Link>
					</div>
					<div className='footer-link-items'>
						<h2>Our Team</h2>
						<Link to='/profile1' >Jane Doe</Link>
						<Link to='/profile2' >Rommel Galarpe</Link>
						<Link to='/profile3' >Jack Doe</Link>
						<Link to='/hiring' >Join Our Team!</Link>
					</div>
					<div className='footer-link-items'>
						<h2>Contact Information</h2>
						<a>Mobile: +639350922670</a>
						<a>Telephone: 88-8822-5272</a>
						<a>rommelc.galarpe@gmail.com</a>
						<a>Cagayan de Oro City, Philippines</a>
					</div>
				</div>
			</div>
			<section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              El Cajo <img src={elcajologo}/>
            </Link>
          </div>
          <small class='website-rights'>Copyright 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='pagethatdoesntexist'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='pagethatdoesntexist'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='pagethatdoesntexist'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='pagethatdoesntexist'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='pagethatdoesntexist'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
		</div>
		)
}

export default Footer;