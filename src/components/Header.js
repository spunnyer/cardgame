import React from "react"

class Header extends React.Component {
	render() {
		return (
			<header className="sticky top-0 bg-black shadow px-4 py-2">
				<img src="/splendex-logo.svg" alt="splendex" className="h-8"></img>
			</header>
		)
	}
}

export default Header