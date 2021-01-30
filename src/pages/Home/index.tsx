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

interface IMapsInterface {
	result: {
		reviews: IResultObject[];
	}
}

const Home: React.FC = () => {

	const [apiData, setApiData] = useState<IMapsInterface | undefined>(undefined);

	useEffect(() => {
		const fakeApiData: IMapsInterface = {
			result: {
				reviews: [
					{
						author_name: "Lucca Scarano",
						author_url: "",
						language: "pt-br",
						profile_photo_url: "https://avatars3.githubusercontent.com/u/48810662?s=400&u=c23598a03d13729c00dad2625da278516495241e&v=4",
						rating: 5,
						relative_time_description: "",
						text: "Uma incrível profissional, muito dedicada, meu acompanhamento com ela tem sido incomparável. Inclusive mantém contato com eu psiquiatra para entender as decisões e questionar também, percebi muito mais resultados com ela do que com a última psicóloga que fiz acompanhamento.",
						time: 123451,
					},
					{
						author_name: "Jonathan Lopes",
						author_url: "",
						language: "pt-br",
						profile_photo_url: "https://lh6.googleusercontent.com/-ukhbiS-c4iY/AAAAAAAAAAI/AAAAAAAAAAA/ccR3-AkGAF4/w60-h60-p-rp-mo-ba2-br100/photo.jpg",
						rating: 5,
						relative_time_description: "",
						text: "A bea eh uma skndaslkd",
						time: 123452,
					},
					{
						author_name: "Jonathan Lopes",
						author_url: "",
						language: "pt-br",
						profile_photo_url: "https://lh6.googleusercontent.com/-ukhbiS-c4iY/AAAAAAAAAAI/AAAAAAAAAAA/ccR3-AkGAF4/w60-h60-p-rp-mo-ba2-br100/photo.jpg",
						rating: 5,
						relative_time_description: "",
						text: "Uma incrível profissional, muito dedicada, meu acompanhamento com ela tem sido incomparável. Inclusive mantém contato com eu psiquiatra para entender as decisões e questionar também, percebi muito mais resultados com ela do que com a última psicóloga que fiz acompanhamento.",
						time: 123453,
					},
					{
						author_name: "Jonathan Lopes",
						author_url: "",
						language: "pt-br",
						profile_photo_url: "https://lh6.googleusercontent.com/-ukhbiS-c4iY/AAAAAAAAAAI/AAAAAAAAAAA/ccR3-AkGAF4/w60-h60-p-rp-mo-ba2-br100/photo.jpg",
						rating: 5,
						relative_time_description: "",
						text: "Uma incrível profissional, muito dedicada, meu acompanhamento com ela tem sido incomparável. Inclusive mantém contato com eu psiquiatra para entender as decisões e questionar também, percebi muito mais resultados com ela do que com a última psicóloga que fiz acompanhamento.",
						time: 123454,
					},
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
				<TestimonialSection>
					<TestimonialTitle>
						<h2>O que estão falando...</h2>
					</TestimonialTitle>
					<CardContainer>
						{apiData?.result.reviews.map((result, i) => {
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
