import React from 'react';

class BuggyCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  handleClick = () => {
    //  this.state.counter + 1
    this.setState({counter: this.state.counter + 1})
    // this.setState((counter)=> counter + 1)
  };
  
  render() {
    if(this.state.counter > 5) {
      throw new Error('Crashed...!!!')
    }
    return (
      <div>
      <button onClick={this.handleClick}> {this.state.counter} + </button>
      </div>
    );
  }
}

export default BuggyCounter;