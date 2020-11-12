import React from 'react';
import '../../App.css';
import DetailSection from '../DetailSection';
import { detailBpart } from './DetailData';
import Footer from '../Footer';

export default function Businesspartnerships(){
	return(
		<>
		<h1 className='businesspartnerships' >Business Partnerships</h1>
		<DetailSection {... detailBpart } />
		<Footer />
		</>
		)
}
