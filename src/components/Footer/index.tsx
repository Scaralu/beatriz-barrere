import React from 'react';
import {
	FooterSection,
	InfoContainer,
	InfoItem,
	SubText,
	StrongTitle
} from './styles';

const Footer: React.FC = () => {
	return (
		<FooterSection>
			<InfoContainer>
				<InfoItem>
						<StrongTitle>Psicóloga Beatriz Barrere</StrongTitle>
						<SubText>CRP: 06/150187</SubText>
				</InfoItem>
				<InfoItem>
						<StrongTitle>R. Goitacazes, 347 - Sala 04, SP</StrongTitle>
						<SubText>09510-300, Brasil</SubText>
				</InfoItem>
				<InfoItem>
					<StrongTitle>Designed and developed by</StrongTitle>
					<StrongTitle>RavenCode</StrongTitle>
				</InfoItem>
			</InfoContainer>
		</FooterSection>
	)
}

export default Footer;
