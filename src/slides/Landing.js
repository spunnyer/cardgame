import React from "react"
import Button from "../components/Button"

const min = 3, max = 10

class Landing extends React.Component {

	startGame = () => {
		
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
				<div>
					<div className="text-2xl font-medium mb-12">Splendex Memory Game</div>
					<div className="text-sm mb-2">
						Deck Size
					</div>
					<div>
						<select className="text-xl px-4 py-2 shadow">
							{options}
						</select>
					</div>
					<div onClick={() => {
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