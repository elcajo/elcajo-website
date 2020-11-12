import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import DetailSection from '../DetailSection';
import { homeObjAbout } from './DetailData';
import Cards from '../Cards';
import ServicesHero from '../ServicesHero';
import OurTeam from '../OurTeam';
import Footer from '../Footer';

export default function Home () {
	return(
		<>
			<HeroSection />
			<DetailSection {...homeObjAbout} />
			<Cards />
			<ServicesHero />
			<OurTeam />
			<Footer />
		</>
		)
	
}
