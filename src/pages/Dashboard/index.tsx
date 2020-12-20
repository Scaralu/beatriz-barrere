import React from 'react';

import { Link } from 'react-router-dom';


const Dashboard: React.FC = () => {
	return (
		<>
            <h1>Dashboard</h1>

            <Link to="/about">
                About
            </Link>
        </>
	)
}

export default Dashboard;
