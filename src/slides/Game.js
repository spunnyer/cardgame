import React from "react"

class Game extends React.Component {

	state = {
		size: 8
	}

	componentDidMount = () => {

	}

	render() {

		var cards = []

		for (var x = 0; x < this.state.size * 2; x++) {
			cards.push(
				<Card type=""></Card>
			)
		}

		return (
			<div className="flex-grow">
				<div className="flex">
					<div>
						Current tiles: 0
					</div>
					<div>
						Best: 9
					</div>
					<div>
						<button>Restart</button>
					</div>
				</div>
				<div className="grid grid-cols-3 space-2">

				</div>
			</div>
		)
	}

}

export default Game