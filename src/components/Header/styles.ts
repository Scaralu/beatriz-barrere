import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Nav = styled.div`
    display: flex;
    flex-wrap: wrap;

    width: 100%;
    height: 70;
    align-items: center;
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

    padding: 0.5em;
    text-decoration: none;
    
    transition: opacity 0.2s;

    &:Link {
        margin-right: 1.25rem;
        margin-left: 1.25rem;
    }
    
    &:hover {
        opacity: 0.6;
        border-bottom: 2px solid #0490ad;
    }
`;