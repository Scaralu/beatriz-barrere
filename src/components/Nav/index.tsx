import React from 'react';

import { Link } from 'react-router-dom';
import { Section, StyledLink, LinkContainer, FakeStyledLink } from './styles';

import Logo from '../../assets/logo/outline-green.png'

const Nav: React.FC = () => {
	return (
		<>
			<Section>
					<Link to="/">
							<img src={Logo} alt="PsicólogoBeatrizBarrere" width="100" height="100"/>
					</Link>
					<LinkContainer>
						<StyledLink to="/">
							Home
						</StyledLink>
						<StyledLink to="/contact">
							Contato
						</StyledLink>
						<FakeStyledLink to="#">
							Blog
						</FakeStyledLink>
					</LinkContainer>
			</Section>
		</>
	)
}

export default Nav;
