import React from "react"

class Game extends React.Component {

	state = {
		pairs: 4,
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
		this.createGrid()
	}

	createGrid = () => {
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

	componentDidMount = () => {

		const savedState = localStorage.getItem("state")
	
		if (savedState == null) {
			this.createGrid()
		} else {
			this.setState(JSON.parse(savedState))
		}

	}

	saveState = () => {
		localStorage.setItem("state", JSON.stringify(this.state))
	}

	finish = () => {

		const prevBest = localStorage.getItem("bestScore")

		if (prevBest == null || prevBest < this.state.steps) {
			localStorage.setItem("bestScore", this.state.steps)
			console.info(`New high score!`)
		}

	}

	onClick = async (event) => {

		var presseds = this.state.presseds

		console.log(presseds)
		console.log(presseds.length)

		if (presseds.length < 2) {
			await this.setState({
				presseds: presseds.concat([parseInt(event.target.dataset.index)]),
				steps: this.state.steps + 1
			})
		}

		if (this.state.presseds.length == 2) {

			console.log(this.state.grid[this.state.presseds[0]])
			console.log(this.state.grid[this.state.presseds[1]])

			setTimeout(async () => {
				if (this.state.grid[this.state.presseds[0]] == this.state.grid[this.state.presseds[1]]) {
					await this.setState({
						disabled: this.state.disabled.concat(this.state.presseds),
						presseds: []
					})

					console.table([
						this.state.disabled.length, this.state.pairs * 2
					])

					if (this.state.disabled.length == this.state.pairs * 2) {
						console.info("Játék befejezve!")
						this.finish()
					}

				} else {
					console.log("Nem")
					this.setState({
						presseds: []
					})
				}
			}, 2000)		
		}
		
		this.saveState()
	}

	render() {

		var cards = []

		this.state.grid.map((type, index) => {
			if (this.state.disabled.includes(index)) {
				cards.push(
					<div key={index} className="bg-black">
						<img src={`/cards/${type}.png`}></img> 
					</div>
				)
			} else {
				cards.push(
					<div key={index} data-index={index} onClick={this.onClick} className="p-4 rounded-lg flex shadow bg-white cursor-pointer hover:bg-gray-300 transition-colors duration-150">
						<div>
							{this.state.presseds.includes(index) ? <img src={`/cards/${type}.png`}></img> : ""}
						</div>
					</div>
				)
				}
		})

		return (
			<div className="container mx-auto flex-grow flex flex-col">
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
				<div className="grid grid-cols-3 grid-rows-3 gap-4 grid-flow-col grid-flow-row min-h-screen">
					{cards}
				</div>
			</div>
		)
	}

}

export default Game