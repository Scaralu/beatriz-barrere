import React from 'react';

import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';

import Button from '../Button';
import BeatrizBarrere from '../../assets/bea.jpeg'

import {
	Section,
	Container,
	LeftWrapper,
	RightWrapper,
	Text,
	ContactWrapper,
	SocialLinks,
	AvatarImage,
} from './styles';
import { useHistory } from 'react-router-dom';


const Header: React.FC = () => {

	const history = useHistory();

	function goToContact() {
		history.push('/contact');
	}

	return(
		<Section>
			<Container>
				<LeftWrapper>
					<Text>
						<blockquote>
							<h1>
								<i>Mudancas positivas no comportamento estao associadas a uma melhor perspectiva cognitiva</i>
							</h1>
							<br />
							<cite>- Wright; Basco; Thase, 2008</cite>
							<br />
							<br />
							<hr/>
							<br/>
						</blockquote>
						<strong>
							CRP: 06/150187
						</strong>
						<br/><br/>
						<p>
							<strong>Sou Beatriz Barrére</strong> formada em Psicopedagogia e Psicologia e tenho me especializado em transtornos
							de ansiedade e depressão, presto atendimento em psicoterapia individual nas modalidades presencial ou online, com crianças, adolescentes e adultos,
							utilizando a Terapia Cognitivo-Comportamental (TCC).

							<br/>
							Sou proprietária da empresa Beatriz Barrére Psicologia
						</p>
					</Text>
					<Button onClick={goToContact}>
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
					<AvatarImage src={BeatrizBarrere} alt="beatriz_psicologa" width={300} height={300}/>
				</RightWrapper>
			</Container>
		</Section>
	);
}

export default Header;
