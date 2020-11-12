import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import '../Error404.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

function Error404() {
	return(
		<>
		<div className='banner-container'>
			<h1>Error 404</h1>
			<p>Page Not Found</p>
			<p>Either the Developer is lazy or</p>
			<p>You've just got Rickrolled</p>
			<div className='hero-btns'>
				<Link to='/elcajo-website'>
					<Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' > GO BACK </Button>
				</Link>
			</div>
		</div>
		<Footer />
		</>
	);
}

export default Error404;
