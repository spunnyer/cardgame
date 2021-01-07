import React from "react"

const min = 6, max = 20

class SelectDeckSize extends React.Component {

	onChange = (event) => {
		this.props.onDeckSizeChange({
			deckSize: parseInt(event.target.value)
		})
	}

	render() {

		var options = []

		for (var x = min; x <= max; x++) {
			options.push(
				<option key={x} value={x}>{x}</option>
			)
		}

		return (
			<select className="text-xl px-4 py-2 shadow" onChange={this.onChange}>
				{options}
			</select>
		)
	}
}

export default SelectDeckSize