import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			outline: 0;
	}

	body {
			background: #fff;
			color: #3a3a3a;
			-webkit-font-smoothing: antialiased;
			font-family: 'Roboto', sans-serif;
	}

	body, input, button {
		font-size: 16px;
	}

	button {
		cursor: pointer;
	}
`
