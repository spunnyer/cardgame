import React from "react"
import Button from "../components/Button"

const min = 3, max = 10

class Landing extends React.Component {

	state = {
		deckSize: null
	}

	startGame = () => {
		alert("Játék elkezdése...")
	}

	onChange = (event) => {
		// handle deck size update
		this.setState({
			deckSize: event.target.value()
		})
	}

	render() {

		var options = []

		for (var x = min; x <= max; x++) {
			options.push(
				<option value={x}>{x}</option>
			)
		}

		return (
			<div className="flex-grow flex items-center justify-center">
				<div className="block">
					<div className="text-2xl font-medium mb-12">Splendex Memory Game</div>
					<div className="text-sm mb-2">
						Deck Size
					</div>
					<div>
						<select className="text-xl px-4 py-2 shadow" onChange={this.onChange}>
							{options}
						</select>
					</div>
					<div className="uppercase px-4 py-2 bg-blue-600 font-bold text-white" onClick={() => {
						this.startGame()
					}}>
						Start New Game
					</div>
				</div>
			</div>
		)
	}
}

export default Landing