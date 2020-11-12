import React from 'react';
import '../../App.css';
import DetailSection from '../DetailSection';
import { serviceDatasecurity } from './DetailData';
import Footer from '../Footer';

export default function Datasecurity(){
	return(
		<>
		<h1 className='datasecurity' >Data Security</h1>
		<DetailSection {... serviceDatasecurity} />
		<Footer />
		</>
		)
}
