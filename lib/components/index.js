import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    answer: 42,
  };
  render() {
    return (
//			React.create('h2', null, 'hello React')
			<h2>Hello React -- {this.state.answer}</h2>
		);
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('root'),
);
