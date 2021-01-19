import React from 'react';

import Header from '../../components/Header';
import Button from '../../components/Button';
import { IntroductionContainer, HeaderSection, LeftWrapper, RightWrapper, Image, Text, ContactWrapper, SocialLinks, FaqSection } from './styles';

import test from '../../assets/bea.jpeg';
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi"

import FAQ from '../../assets/undraw/faq.svg';

const Home: React.FC = () => {
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
									href="https://api.whatsapp.com/send?phone=15551234567"
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
									href="https://www.instagram.com/psi.beatrizbarrere"
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
			<FaqSection>
				<img src={FAQ} alt="faq" width="250"/>
				Para quem?
				TODOS podem fazer psicoterapia!“Psicólogo é coisa de louco” era dito por muitos, hoje em dia esse conceito mudou. A psicoterapia é procurada em diversas situações, seja por encaminhamento médico ou procura direta, caso a pessoa esteja enfrentando um momento em que não consiga caminhar sozinha(o).


				Como?
				As sessões têm frequência semanal, quinzenal ou até mensal (a combinar no primeiro atendimento, dependendo do caso), com duração de 50 minutos.
				A modalidade de atendimento pode ser presencial no consultório localizado em São Caetano do Sul ou online (dependendo da localização geográfica do paciente). O valor das sessões será combinado no primeiro encontro.
			</FaqSection>
		</>
	)
}

export default Home;
