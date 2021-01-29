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
						A psicoterapia é procurada em diversas situações, seja por encaminhamento médico ou procura direta, caso a pessoa esteja enfrentando um momento em que não consiga caminhar sozinha(o).
					</StyledText>
				</ItemContainer>
				<ItemContainer>
					<StyledImage src={HOW} alt="como" height="168"/>
					<SubTitle>Como Acontece?</SubTitle>
					<StyledText>
						<strong>Online ou Presencial!</strong>
						<br/>
						<br/>
						As sessões têm frequência semanal, quinzenal ou até mensal, com duração de 50 minutos cada.
					</StyledText>
				</ItemContainer>
			</Wrapper>
		</Section>
	);
}

export default Faq;
