import React from 'react';
import '../../App.css';
import DetailSection from '../DetailSection';
import { detailAutomation } from './DetailData';
import Footer from '../Footer';

export default function Automation(){
	return(
		<>
		<h1 className='automation' >Automation</h1>
		<DetailSection {... detailAutomation} />
		<Footer />
		</>
		)
}