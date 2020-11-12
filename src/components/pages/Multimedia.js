import React from 'react';
import '../../App.css';
import DetailSection from '../DetailSection';
import { serviceMultimedia } from './DetailData';
import Footer from '../Footer';

export default function Multimedia(){
	return(
		<>
		<h1 className='multimedia' >Multimedia</h1>
		<DetailSection {... serviceMultimedia} />
		<Footer />
		</>
		)
}
