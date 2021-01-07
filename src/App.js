import React from "react"
import Game from "./slides/Game"
import Landing from "./slides/Landing"

class App extends React.Component {

	state = {
		inGame: false,
		data: null,
		deckSize: 6
	}

	componentDidMount = () => {
		const state = localStorage.getItem("state")

		if (state !== null) {
			this.setState({
				inGame: true, data: state
			})
		}
	}

	onStartGame = () => {
		this.setState({
			inGame: true
		})
	}

	onDeckSizeChange = ({deckSize}) => {
		this.setState({
			deckSize
		})
		console.log(this.state)
	}

	render() {
		return (
			<div>
				{this.state.inGame ? <Game deckSize={this.state.deckSize} state={this.state.data}/> : <Landing onDeckSizeChange={this.onDeckSizeChange} onStartGame={this.onStartGame}/>}
			</div>
		)
	}
}

export default App