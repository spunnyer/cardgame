import React from "react"

class StartGameButton extends React.Component {
	render() {
		return (
			<div className="inline-block uppercase px-4 py-2 bg-orange font-bold cursor-pointer text-white" onClick={() => {
				this.props.onStartGame()
			}}>
				Start New Game
			</div>
		)
	}
}

export default StartGameButton