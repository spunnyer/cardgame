import React from "react"

import StartGameButton from "./StartGameButton"
import SelectDeckSize from "./SelectDeckSize"


class Header extends React.Component {
	render() {
		return (
			<header className="sticky top-0 bg-black shadow px-4 py-2 text-center flex">
				<img src="/splendex-logo.svg" alt="splendex" className="h-8"/>
				{this.props.isInGame ?
				<div className="flex-grow-1 flex flex-row items-center justify-center text-center">
					<div className="px-2 text-gray-100">Deck size:</div>
					<SelectDeckSize onDeckSizeChange={this.props.onDeckSizeChange}/>
					<StartGameButton onStartGame={this.props.onStartGame}/>
				</div> : null}
			</header>
		)
	}
}

export default Header