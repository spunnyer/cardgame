import React from "react"

import StartGameButton from "./StartGameButton"
import SelectDeckSize from "./SelectDeckSize"


class Header extends React.Component {
	render() {
		return (
			<header className="sticky top-0 bg-black shadow px-4 py-2 text-center flex relative">
				<img src="/splendex-logo.svg" alt="splendex" className="h-10"/>
				{this.props.isInGame ?
				<div className="absolute inset-0 w-full h-full text-center flex items-center justify-center">
						<span className="px-2 text-gray-100">Deck size:</span>
						<SelectDeckSize onDeckSizeChange={this.props.onDeckSizeChange}/>
						<div className="inline-block mx-4">
							<StartGameButton onStartGame={this.props.onStartGame}/>
						</div>
				</div> : null}
			</header>
		)
	}
}

export default Header