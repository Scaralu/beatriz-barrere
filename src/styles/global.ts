import { createGlobalStyle } from 'styled-components';

import './font.css';

export default createGlobalStyle`

	* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			outline: 0;
			-webkit-font-smoothing: antialiased;
	}

	body {
			background: #fff;
			color: #3a3a3a;
	}

	body, input, button {
		font-size: 16px;
	}

	button {
		cursor: pointer;
	}
`
