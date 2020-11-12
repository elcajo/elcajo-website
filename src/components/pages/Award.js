import React from 'react';
import '../../App.css';
import DetailSection from '../DetailSection';
import { detailAwards } from './DetailData';
import Footer from '../Footer';

export default function Award(){
	return(
		<>
		<h1 className='award' >Awards</h1>
		<DetailSection {... detailAwards} />
		<Footer />
		</>
		)
}
