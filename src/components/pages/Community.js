import React from 'react';
import '../../App.css';
import DetailSection from '../DetailSection';
import { detailCommunity } from './DetailData';
import Footer from '../Footer';

export default function Community(){
	return(
		<>
		<h1 className='community' >Community</h1>
		<DetailSection {... detailCommunity} />
		<Footer />
		</>
		)
}
