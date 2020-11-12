import React from 'react';
import DetailSection from '../DetailSection';
import { profileObjTwo } from './DetailData';
import '../../App.css';
import Footer from '../Footer';

function Profile2() {
	return(
		<>
			<DetailSection {...profileObjTwo} />
			<Footer />
		</>
		)
}

export default Profile2;