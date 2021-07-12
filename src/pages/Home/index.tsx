import React, { useState, useEffect } from 'react';

import Nav from '../../components/Nav';
import Header from '../../components/Header';
import Faq from '../../components/Faq';
import Testimonial from '../../components/Testimonial';
import Footer from '../../components/Footer';

import {
	TestimonialSection,
	TestimonialTitle,
	CardContainer
} from './styles';

import api from '../../services/api';

interface IResultObject {
		"author_name" : string;
		"author_url" : string;
		"language" : string;
		"profile_photo_url" : string;
		"rating" : number;
		"relative_time_description" : string;
		"text" : string;
		"time" : number;
}

const Home: React.FC = () => {

	const [apiData, setApiData] = useState<IResultObject[] | undefined>(undefined);

	useEffect(() => {
		async function loadApiData(){
			try {
				const result: any = await api.get('/maps');
				setApiData(result.data.data);
			} catch(e) {
				console.warn(e);
			}
		}

		loadApiData();
	}, [apiData])

	return (
		<>
			<Nav />
			<Header />
			<Faq />
			{apiData &&
				<TestimonialSection>
					<TestimonialTitle>
						<h2>O que estão falando...</h2>
					</TestimonialTitle>
					<CardContainer>
						{apiData.map((result, i) => {
							if (i < 3) {
								return(
										<Testimonial name={result.author_name} rating={result.rating} text={result.text} profile_photo={result.profile_photo_url} key={result.time} />
								)
							}
							return(null);
						})}
					</CardContainer>
				</TestimonialSection>
			}
			<Footer />
		</>
	)
}

export default Home;
