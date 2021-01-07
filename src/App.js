import React from "react"
import Game from "./slides/Game"
import Landing from "./slides/Landing"
import Header from "./components/Header"

class App extends React.Component {

	state = {
		inGame: false,
		data: null,
		deckSize: 6
	}

	componentDidMount = () => {
		// check if state has data already
		const state = localStorage.getItem("state")

		if (state !== null) {
			this.setState({
				inGame: true, data: state
			})
		}
	}

	onStartGame = async () => {
		// panic! in header new game grid doesn't resets (NEEDS FIX)
		await this.setState({
			inGame: true
		})
	}

	onDeckSizeChange = ({deckSize}) => {
		this.setState({
			deckSize
		})
	}

	render() {
		return (
			<div>
				<Header isInGame={this.state.inGame} onDeckSizeChange={this.onDeckSizeChange} onStartGame={this.onStartGame}/>
				{this.state.inGame ? <Game deckSize={this.state.deckSize} state={this.state.data}/> : <Landing onDeckSizeChange={this.onDeckSizeChange} onStartGame={this.onStartGame}/>}
			</div>
		)
	}
}

export default App