import React from "react"

class Game extends React.Component {

	state = {
		pairs: 4,
		highScore: 0,
		inPair: 2,
		grid: [],
		presseds: []
	}

	shuffle = (array) => {
		return array.sort(() => 0.5 - Math.random())
	}

	componentDidMount = () => {

		var list = [
			"angular", "d3", "jenkins", "postcss", "react", "sass", "splendex", "ts", "webpack"
		]

		// get randomized cards
		const selecteds = this.shuffle(list).slice(0, this.state.pairs)

		// create playarea
		var grid = []

		selecteds.map(type => {
			for (var x = 0; x < this.state.inPair; x++) {
				grid.push(type)
			}
		})



		this.setState({
			grid: this.shuffle(grid)
		})

	}

	onClick = (event) => {
		console.log(`Button pressed!`)

		if (this.state.presseds.length == 0) {
			this.setState({
				presseds: [1]
			})
		}

		console.log(event.target)
	}

	render() {

		console.log(this.state.grid)

		var cards = []

		this.state.grid.map((type, index) => {
			const isShowing = true
			cards.push(
				<div key={index} value={index} onClick={this.onClick} className="rounded-lg h-12 w-12 shadow bg-white curser-pointer hover:bg-gray-300 transition-colors duration-150">
					<div>
						{this.state.presseds[0] == index ? <img src={`/cards/${type}.png`}></img> : ""}
					</div>
				</div>
			)
		})

		return (
			<div className="container mx-auto flex-grow">
				<div className="flex">
					<div>
						Current tiles: 0
					</div>
					<div>
						<div className="text-gray-600 py-4">Best:</div>
						<div>{this.state.highScore}</div>
					</div>
					<div>
						<div role="button" className="bg-transparent border-2 uppercase py-2 px-4">Restart</div>
					</div>
				</div>
				<div className="grid grid-cols-3 gap-4">
					{cards}
				</div>
			</div>
		)
	}

}

export default Game