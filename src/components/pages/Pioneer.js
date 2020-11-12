import React from 'react';
import '../../App.css';
import DetailSection from '../DetailSection';
import { detailPioneer } from './DetailData';
import Footer from '../Footer';

export default function Pioneer(){
	return(
		<>
		<h1 className='pioneer' >Pioneer</h1>
		<DetailSection {... detailPioneer } />
		<Footer />
		</>
		)
}
