import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0};
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.reset = this.reset.bind(this);
  }

  add() {
    this.setState({count:this.state.count+1});
  }
  subtract() {
    this.setState({count:this.state.count-1});
  }
  reset() {
    this.setState({count:0});
  }
  render() {
    return (
      <div>
        <button onClick={this.add}>Add</button>
        <br /><br />
        <button onClick={this.subtract}>Subtract</button>
        <br /><br />
        <button onClick={this.reset}>Reset</button>
        <br /><br />
        <p>Counter : {this.state.count}</p>
      </div>
    );
  }
}

export default Counter;
