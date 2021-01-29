import React, { useState, useEffect } from 'react';

import Nav from '../../components/Nav';
import Header from '../../components/Header';
import Faq from '../../components/Faq';
import Testimonial from '../../components/Testimonial';
import Footer from '../../components/Footer';

import {
	CarouselSection,
	TestimonialTitle
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

interface IMapsInterface {
	html_attributions: [];
	result: {
		reviews: IResultObject[];
	}
}

const Home: React.FC = () => {

	const [apiData, setApiData] = useState<IMapsInterface | undefined>(undefined);

	useEffect(() => {

		const fakeApiData: IMapsInterface = {
			html_attributions: [],
			result: {
				reviews: [
					{
						author_name: "Lucca Scarano",
						author_url: "",
						language: "pt-br",
						profile_photo_url: "https://avatars3.githubusercontent.com/u/48810662?s=400&u=c23598a03d13729c00dad2625da278516495241e&v=4",
						rating: 5,
						relative_time_description: "",
						text: "A bea é muito boa tralalala",
						time: 123451,
					}
				]
			}
		}

		async function loadApiData(){
			try {
				const data: IMapsInterface = await api.get('/maps');
				setApiData(data);
			} catch(e) {
				console.warn(e);

				setApiData(fakeApiData);
			}
		}

		loadApiData();
	}, [])

	return (
		<>
			<Nav />
			<Header />
			<Faq />
			{apiData &&
				<CarouselSection>
					<TestimonialTitle>
						<h2>Testemunhos</h2>
					</TestimonialTitle>
					{apiData?.result.reviews.map(result => {
						console.log(result);
						return(
							<Testimonial name={result.author_name} rating={result.rating} text={result.text} profile_photo={result.profile_photo_url} key={result.time} />
						)
					})}
				</CarouselSection>
			}
			<Footer />
		</>
	)
}

export default Home;
