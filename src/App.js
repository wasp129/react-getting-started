import React from 'react';

// Renders the actual button and calls the onclick function
class Button extends React.Component {
	render() {
		return (
			<div>	
				<button onClick={() => this.props.onClickFunction(this.props.incrementAmount)}>
					+{this.props.incrementAmount}
				</button>
			</div>
		);
	}
};

// Displays the result 
const Result = (props) => {
	return (
		<div>{props.click}</div>
	)
};

// Class that renders both Button and Result
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			click: 0
		}
	}

	incrementCounter = (incrementAmount) => {
		this.setState((prevState) => ({
	 		click: prevState.click + incrementAmount
	 	}));
	};

	render() {
		return(
			<div>
				<Button incrementAmount = {1} onClickFunction={this.incrementCounter}/>
				<Button incrementAmount = {5} onClickFunction={this.incrementCounter}/>
				<Button incrementAmount = {10} onClickFunction={this.incrementCounter}/>
				<Button incrementAmount = {20} onClickFunction={this.incrementCounter}/>
				<Result click={this.state.click}/>
			</div>
		);
	}
};

export default App;