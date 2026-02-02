import React from "react";

class PriceComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { price: 50 };
    this.changePrice = this.changePrice.bind(this);
  }

  changePrice() {
    this.setState({ price: 5000 });
  }

  render() {
    return (
      <div>
        <p>The price of the component is {this.state.price}</p>
        <button onClick={this.changePrice}>
          Update Price
        </button>
      </div>
    );
  }
}

export default PriceComp;
