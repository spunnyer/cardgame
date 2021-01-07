import React from 'react'
import ReactDOM from 'react-dom'

import Header from "./components/Header"
import Landing from "./slides/Landing"

ReactDOM.render(
	<React.StrictMode>
		<Header/>
		<Landing />
	</React.StrictMode>,
	document.getElementById('root')
)