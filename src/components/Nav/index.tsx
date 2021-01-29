import React from 'react';

import { Link } from 'react-router-dom';
import { Section, StyledLink, LinkContainer } from './styles';

import Logo from '../../assets/logo/outline-green.png'

const Nav: React.FC = () => {
	return (
		<>
			<Section>
					<Link to="/">
							<img src={Logo} alt="PsicólogoBeatrizBarrere" width="100" height="100"/>
					</Link>
					<LinkContainer>
						<StyledLink to="/about">
							Sobre
						</StyledLink>
						<StyledLink to="/contact">
							Contato
						</StyledLink>
						<StyledLink to="/contact">
							Blog
						</StyledLink>
					</LinkContainer>
			</Section>
		</>
	)
}

export default Nav;
