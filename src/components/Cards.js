import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

import thautomation from '../images/thautomation.jpg';
import thcommunity from '../images/thcommunity.jpg';
import thaward from '../images/thaward.jpg';
import thpioneer from '../images/thpioneer.jpg';
import thbusinesspartnerships from '../images/thbusinesspartnerships.jpg';

function Cards(){
	return(
		<div className='cards'>
				<div className="cards__container">
					<div className="cards__wrapper">
						<ul className="cards__items" >
							<CardItem 
								text='Will start automation services using RPA UiPath in the year 2021'
								src={thautomation} label='Automation' path='/automation' 
							/>
							<CardItem 
								text='Spreading awareness of data security in the community'
								src={thcommunity} label='Community Service' path='/community' 
							/>
							<CardItem 
								text='Awarded Best IT Company in the Middle of Nowhere'
								src={thaward} label='Awards' path='/award' 
							/>
						</ul>
						<ul className="cards__items" >
							<CardItem 
								text='The pioneering IT Company in the Middle of Nowhere'
								src={thpioneer} label='Pioneer' path='/pioneer' 
							/>
							<CardItem 
								text='Good Results attracts Business Parners. We are able to expand more.'
								src={thbusinesspartnerships} label='Business Partnerships' path='/businesspartnerships' 
							/>
						</ul>
					</div>
				</div>
		</div>
		)
}

export default Cards