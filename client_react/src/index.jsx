import React from 'react';
import ReactDOM from 'react-dom';
import Answer from './components/Answer.jsx';

var dummy = ['Kay', 'Albito', 'url']

class Quiz extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ready: false,
		};
		this.isReady = this.isReady.bind(this);
	}

	isReady() {
		this.setState({
			ready: true	
		});
	}

	render() {
		return (
			<div id="quiz">
				<div className="profilePic"> 
					<p>user profile pic {dummy[2]}</p>
				</div>
				<br />
				<div>
					{!this.state.ready ? (
						<button onClick={this.isReady} className="readyButton">
							Ready?
						</button>
					) : (
						<Answer dummy={dummy}/>
					)}
				</div>
			</div>
		)
	}
}

ReactDOM.render(
	<Quiz />, document.getElementById('root')
);
