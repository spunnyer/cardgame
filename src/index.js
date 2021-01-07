import React from 'react'
import ReactDOM from 'react-dom'

import Header from "./components/Header"
import Landing from "./slides/Landing"
import Game from "./slides/Game"

ReactDOM.render(
	<React.StrictMode>
		<Header/>
		<Game />
	</React.StrictMode>,
	document.getElementById('root')
)