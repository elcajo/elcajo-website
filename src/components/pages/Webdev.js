import React from 'react';
import '../../App.css';
import DetailSection from '../DetailSection';
import { serviceWebdev } from './DetailData';
import Footer from '../Footer';

export default function Webdev(){
	return(
		<>
		<h1 className='webdev' >Web Development</h1>
		<DetailSection {... serviceWebdev} />
		<Footer />
		</>
		)
}