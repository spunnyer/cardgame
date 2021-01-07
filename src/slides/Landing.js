import React from "react"
import StartGameButton from "../components/StartGameButton"
import SelectDeckSize from "../components/SelectDeckSize"

class Landing extends React.Component {

	render() {
		return (
			<div className="flex-grow flex items-center justify-center">
				<div className="block text-center">
					<div className="text-3xl font-medium mb-24 mt-24">Splendex Memory Game</div>
					<div className="text-sm mb-2">Deck Size</div>
					<SelectDeckSize onDeckSizeChange={this.props.onDeckSizeChange}/>
					<div className="mt-8">
						<StartGameButton onStartGame={this.props.onStartGame}/>
					</div>
				</div>
			</div>
		)
	}
}

export default Landing