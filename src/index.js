import React from 'react'
import ReactDOM from 'react-dom'

import Header from "./components/Header"
import Landing from "./slides/Landing"
import Game from "./slides/Game"
import App from "./App"

ReactDOM.render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>,
	document.getElementById('root')
)