import React from 'react';

import { Link } from 'react-router-dom';


const Home: React.FC = () => {
	return (
        <>
            <h1>Home</h1>
        

            <Link to="/">
                About
            </Link>
        </>
    )
}

export default Home;
