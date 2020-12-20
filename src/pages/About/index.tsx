import React from 'react';

import { Link } from 'react-router-dom';

const About: React.FC = () => {
	return (
        <>
            <h1>About</h1>
            <br/>
            <Link to="/contact">
                Contact
            </Link>
        </>
	)
}

export default About;
