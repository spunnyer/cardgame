import React from "react"

class Game extends React.Component {

	state = {
		deckSize: this.props.deckSize,
		pairs: 5,
		steps: 0,
		highScore: 0,
		inPair: 2,
		grid: [],
		presseds: [],
		disabled: []
	}

	shuffle = (array) => {
		return array.sort(() => 0.5 - Math.random())
	}

	onRestart = () => {
		this.setState({
			steps: 0,
			presseds: [],
			disabled: []
		})

		this.clearState()
		this.createGrid()
	}

	createGrid = () => {
		
		var list = [
			"angular", "d3", "jenkins", "postcss", "react", "redux", "sass", "splendex", "ts", "webpack"
		]

		// get randomized cards
		const selecteds = this.shuffle(list).slice(0, this.state.deckSize / 2)

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

	componentDidMount = () => {
	
		if (this.props.state == null) {
			this.createGrid()
		} else {
			this.setState(JSON.parse(this.props.state))
		}


		// get high score from cache
		const cacheHighScore = localStorage.getItem("highScore")
		
		this.setState({
			highScore: (cacheHighScore == null ? 0 : cacheHighScore)
		})

	}

	saveState = () => {
		localStorage.setItem("state", JSON.stringify(this.state))
	}

	clearState = () => {
		localStorage.removeItem("state")
	}

	finish = () => {

		if (this.state.highScore < this.state.steps) {
			localStorage.setItem("highScore", this.state.steps)
			this.setState({
				highScore: this.state.steps
			})
			console.info(`New high score!`)
		}

		// senitize
		this.clearState()

	}

	onClick = async (event) => {

		console.log(`Megnyomás`)

		var presseds = this.state.presseds

		if (presseds.length < 2) {
			await this.setState({
				presseds: presseds.concat([parseInt(event.target.dataset.index)]),
				steps: this.state.steps + 1
			})
		}

		console.log(this.state.disabled.length, this.state.deckSize)

		if (this.state.presseds.length == 2) {

			setTimeout(async () => {
				if (this.state.grid[this.state.presseds[0]] == this.state.grid[this.state.presseds[1]]) {
					await this.setState({
						disabled: this.state.disabled.concat(this.state.presseds),
						presseds: []
					})

					if (this.state.disabled.length == this.state.deckSize) {
						console.info("The game has ended!")
						this.finish()
					}
				} else {
					console.log("Nem")
					this.setState({
						presseds: []
					})
				}
			}, 1200)		
		}
		
		this.saveState()
	}

	render() {

		var cards = []

		this.state.grid.map((type, index) => {

			if (this.state.disabled.includes(index)) {
				cards.push(
					<div key={index} className="bg-transparent p-4">
						<img src={`/cards/${type}.png`}></img> 
					</div>
				)
			} else {
				cards.push(
					<div key={index} data-index={index} onClick={this.onClick} className="p-4 rounded-lg flex shadow bg-white cursor-pointer hover:bg-gray-300 transition-colors duration-150">
						<img className={`pointer-events-none ${this.state.presseds.includes(index) ? "opacity-100" : "opacity-0"}`}  src={`/cards/${type}.png`}/>
					</div>
				)
			}
		})

		return (
			<div className="md:max-w-screen-md container mx-auto flex-grow flex flex-col">
				<div className="flex relative py-2">
					<div className="float-right">
						<span className="text-gray-500">Current tiles:</span> {this.state.steps}
					</div>
					<div className="flex-grow text-center">
						<div className="text-gray-500">Best:</div>
						<div>{this.state.highScore}</div>
					</div>
					<div className="float-left">
						<div onClick={this.onRestart} role="button" className="bg-transparent border-2 uppercase py-2 px-4">Restart</div>
					</div>
				</div>
				<div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 pb-8">
					{cards}
				</div>
			</div>
		)
	}

}

export default Game