import React from 'react';
import {NavF} from './styles';
import {NavB} from './styles';
import {Text} from './styles';
import {TextB} from './styles';
import {NavBorder} from './styles';
import {NavItem} from './styles';
import {NavIcon} from './styles';

import { SocialLinks } from './styles';
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Logo from '../../assets/logo/outline-green.png'

const Footer: React.FC = () => {
	return (
		<NavF>

			<NavB>
				<NavItem>
						<TextB><strong>Psicóloga Beatriz Barrere</strong></TextB>
						<TextB>contato@beatrizbarrere.com</TextB>
						<TextB>CRP: 06/150187</TextB>

				</NavItem>

				<NavItem>
						<TextB>Rua Gabriel Antunes, 4</TextB>
						<TextB>05638060</TextB>

				</NavItem>

				<div>
							<NavBorder>

								<SocialLinks
									href="https://api.whatsapp.com/send?phone=15551234567"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaWhatsapp size={30} />

								</SocialLinks>

								<Text>11 111111111</Text>

							</NavBorder>

							<NavBorder>

								<SocialLinks
									href="https://www.instagram.com/psi.beatrizbarrere"
									target="_blank"
									rel="noopener noreferrer"
								>

									<FaInstagram size={30} />

								</SocialLinks>

								<Text>@beatrizfoda</Text>

							</NavBorder>
				</div>


			</NavB>

		</NavF>

	)
}

export default Footer;
