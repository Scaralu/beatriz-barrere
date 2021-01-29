import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Section = styled.section`
    display: flex;
    width: 100%;
		height: 70;
		background: #FFF;
		align-items: center;
		flex-wrap: wrap;
		justify-content: space-around;
`;

export const LinkContainer = styled.div`
    display: flex;
    height: 4em;
    justify-content: center;
    align-items: center;
`;

export const StyledLink = styled(Link)`
    color: #0490ad;
    font-weight: 600;

		padding: 1.0em;
		padding-bottom: 1.0em;
    text-decoration: none;

    transition: opacity 0.2s;

    &:Link {
        margin-right: 0rem;
        margin-left: 0rem;
    }

    &:hover {
        opacity: 0.6;
        border-bottom: 2px solid #f09830;
    }
`;
