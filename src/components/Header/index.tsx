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


const Header: React.FC = () => {
	return(
		<Section>
			<Container>
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
					<AvatarImage src={BeatrizBarrere} alt="undraw" width={300} height={300}/>
				</RightWrapper>
			</Container>
		</Section>
	);
}

export default Header;
