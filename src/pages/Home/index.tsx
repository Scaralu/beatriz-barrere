import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import ReviewCard from '../../components/ReviewCard';
import {
	IntroductionContainer,
	HeaderSection,
	LeftWrapper,
	RightWrapper,
	Image,
	Text,
	ContactWrapper,
	SocialLinks,
	QuestionSection,
	QuestionWrapper,
	QuestionItemContainer,
	QuestionImage,
	SubTitle,
	QuestionText,
	RecomendationSection,
	RecomendedContainer
} from './styles';

import test from '../../assets/bea.jpeg';

import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi"

import HOW from '../../assets/undraw/psico-cyan.svg';
import PEOPLE from '../../assets/undraw/people-cyan.svg';
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
		async function loadApiData(){
			const data: IMapsInterface = await api.get('/maps');
			setApiData(data);
		}

		loadApiData();
	}, [])

	return (
		<>
			<Header />
			<HeaderSection>
				<IntroductionContainer>
					<LeftWrapper>
						<Text>
							<h1><i>Frase louca e filosófica que remete ao teu trampo</i></h1>
							<br/><hr/><br/>
							<strong>
								CRP: 06/150187
							</strong>
							<br/><br/>
							<p>
								<strong>Sou Beatriz Barrere, uma psicóloga comportamental</strong> com diversos pacientes satisfeitos.
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere, leo in eleifend vestibulum, justo l
								igula placerat lacus, quis sollicitudin mi nunc id orci. Nullam eu lacinia nunc, in venenatis elit. Aenea
								n at leo velit.
							</p>
						</Text>
						<Button>
							<strong>Entre em contato!</strong>
						</Button>
						<ContactWrapper>
							<SocialLinks
									href="https://api.whatsapp.com/send?phone=+5511999284848"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaWhatsapp size={40} />
								</SocialLinks>
								<SocialLinks
									href="https://www.instagram.com/psi.beatrizbarrere"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaInstagram size={40} />
								</SocialLinks>
								<SocialLinks
									href="https://goo.gl/maps/asMxoykXXXztTPiy9"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FiMapPin size={40} />
								</SocialLinks>
							</ContactWrapper>
					</LeftWrapper>
					<RightWrapper>
						<Image src={test} alt="undraw" width={300} height={300}/>
					</RightWrapper>
				</IntroductionContainer>
			</HeaderSection>
			<QuestionSection>
				<QuestionWrapper>
					<QuestionItemContainer>
						<QuestionImage src={PEOPLE} alt="people" height="168"/>
						<SubTitle>Quem pode?</SubTitle>
						<QuestionText>
							<strong>TODOS</strong> podem fazer psicoterapia!
							<br/>
							<br/>
							A psicoterapia é procurada em diversas situações, seja por encaminhamento médico ou procura direta, caso a pessoa esteja enfrentando um momento em que não consiga caminhar sozinha(o).
						</QuestionText>
					</QuestionItemContainer>
					<QuestionItemContainer>
						<QuestionImage src={HOW} alt="como" height="168"/>
						<SubTitle>Como Acontece?</SubTitle>
						<QuestionText>
							<strong>Online ou Presencial!</strong>
							<br/>
							<br/>
							As sessões têm frequência semanal, quinzenal ou até mensal, com duração de 50 minutos cada.
						</QuestionText>
					</QuestionItemContainer>
				</QuestionWrapper>
			</QuestionSection>
			<RecomendationSection>
				<RecomendedContainer>
					{apiData?.result.reviews.map((result, i) => {
						console.log(result);
						return(
							<ReviewCard name={result.author_name} rating={result.rating} text={result.text} key={result.time} />
						)
					})
					}
				</RecomendedContainer>
			</RecomendationSection>
		</>
	)
}

export default Home;
