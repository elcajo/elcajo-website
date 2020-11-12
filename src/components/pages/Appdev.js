import React from 'react';
import '../../App.css';
import DetailSection from '../DetailSection';
import { serviceAppdev } from './DetailData';
import Footer from '../Footer';

export default function Appdev(){
	return(
		<>
		<h1 className='appdev' >Mobile Apps Development</h1>
		<DetailSection {... serviceAppdev} />
		<Footer />
		</>
		)
}