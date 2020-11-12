import React from 'react';
import DetailSection from '../DetailSection';
import { profileObjOne } from './DetailData';
import '../../App.css';
import Footer from '../Footer';

function Profile1() {
	return(
		<>
			<DetailSection {...profileObjOne} />
			<Footer />
		</>
		)
}

export default Profile1;
