import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Lita",
    address: "Ho Chi Minh City",
    age: 21,
  };

  handleClick = (event) => {
    console.log("You click button");

    this.setState({
      name: "Lita Nguyen",
      age: Math.floor(Math.random() * 100 + 1),
    });
  };

  handleOnMouseOver(event) {
    console.log(event);
  }

  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <button onClick={this.handleClick}>Click Me!</button>
        <button onMouseOver={this.handleOnMouseOver}>Hover Me!</button>
      </div>
    );
  }
}

export default MyComponent;
