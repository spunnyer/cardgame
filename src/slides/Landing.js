import React from "react"
import Button from "../components/Button"

const min = 1, max = 3

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
					<div>
						Deck Size
					</div>
					<div>
						<select>
							{options}
						</select>
					</div>
					<Button onClick={() => {
						this.startGame()
					}}></Button>
				</div>
			</div>
		)
	}
}

export default Landing