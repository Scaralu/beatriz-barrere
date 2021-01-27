import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const NavF = styled.div`
    display: flex;
    flex-wrap: wrap;
		width: 100%;
		height: 150px;
		align-items: space-around;
		justify-content: center;

    background: #FFF;
`;

export const NavB = styled.div`
    display: flex;
		flex-wrap: wrap;
		margin-top: 7px;
    width: 90%;
		max-height: 70px;
		min-height: 70px;
    align-items: center;
		justify-content: space-between;

    background: #FFF;
`;

export const NavBorder = styled.div`
		display: flex;
		flex-wrap: wrap;
    align-items: center;
		justify-content: center;
		max-height: 60px;

`;
export const NavItem = styled.div`
		display: flex;
		flex-direction: column;
    align-items: flex-start;
		justify-content: center;
		text-align: justify;
		padding: 60px;

`;
export const NavIcon = styled.div`
		display: flex;
		flex-direction: column;
    align-items: center;
		justify-content: center;

`;

export const Text = styled.div`
		padding: 6px;
`;
export const TextB = styled.div`
		padding: 2px;
`;

export const LinkContainerF = styled.div`
    display: flex;
    height: 4em;
    justify-content: center;
    align-items: center;
`;

export const InfoBoxF = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: flex-between;

		padding: 0.5em;
		color: #0490ad;
		font-weight: 600;

		margin-right: 2.50rem;
		margin-left: 2.50rem;
`;

export const InfoContainerF = styled.div`
		display: flex;
		height: 4em;
		jusfity-content: center;
		align-items: space-around;
`;

export const StyledLinkF = styled(Link)`
    color: #0490ad;
    font-weight: 600;

    padding: 0.1em;
    text-decoration: none;

    transition: opacity 0.2s;

    &:Link {
        margin-right: 0.50rem;
        margin-left: 0.50rem;
    }

    &:hover {
        opacity: 0.6;
        border-bottom: 2px solid #0490ad;
    }
`;

export const SocialLinks = styled.a`
	text-decoration: none;
	color: #000000;

	margin-top: 16px;
	margin-bottom: 20px;

	& + a {
		padding-left: 15px
	}
`;
