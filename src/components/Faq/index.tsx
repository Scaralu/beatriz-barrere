import React from 'react';

import PEOPLE from '../../assets/undraw/people-cyan.svg';
import HOW from '../../assets/undraw/psico-cyan.svg';

import {
	Section,
	Wrapper,
	ItemContainer,
	StyledImage,
	SubTitle,
	StyledText,
} from './styles';


const Faq: React.FC = () => {
	return (
		<Section>
			<Wrapper>
				<ItemContainer>
					<StyledImage src={PEOPLE} alt="people" height="168"/>
					<SubTitle>Quem pode?</SubTitle>
					<StyledText>
						<strong>TODOS</strong> podem fazer psicoterapia!
						<br/>
						<br/>
						A psicoterapia é para todo aquele que deseja conhecer a si mesmo e alcançar a sua melhor versão!
					</StyledText>
				</ItemContainer>
				<ItemContainer>
					<StyledImage src={HOW} alt="como" height="168"/>
					<SubTitle>Como Acontece?</SubTitle>
					<StyledText>
						<strong>Online ou Presencial!</strong>
						<br/>
						<br/>
						Entre em contato e agendaremos uma conversa inicial. Nesta conversa abordaremos sobre o porquê você procura um psicólogo e tira as suas dúvidas sobre o processo terapêutico.
					</StyledText>
				</ItemContainer>
			</Wrapper>
		</Section>
	);
}

export default Faq;
