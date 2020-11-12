import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function HeroSection() {
	return(
		<div className='hero-container'>
			<h1>This is IT</h1>
			<p>A simple website created from React</p>
			<p>Follow me on Github | github.com/elcajo</p>
			<div className='hero-btns'>
				<Link to='/profile2'>
					<Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' > ABOUT THE DEVELOPER </Button>
				</Link>
			</div>
		</div>
	);
}

export default HeroSection;