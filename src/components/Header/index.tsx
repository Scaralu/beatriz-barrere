import React from 'react';

import { Link } from 'react-router-dom';

import { Nav, StyledLink, LinkContainer } from './styles';
import Logo from '../../assets/logo/outline-green.png'

const Header: React.FC = () => {
	return (
		<>
			<Nav>

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
			</Nav>
		</>
	)
}

export default Header;
