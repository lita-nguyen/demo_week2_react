import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Lita",
    address: "Ho Chi Minh City",
    age: 21,
  };

  handleClick(event) {
    console.log("You click button");
    console.log("My name is", this.state.name);
  }

  handleOnMouseOver(event) {
    console.log(event);
  }

  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
        <button onClick={this.handleClick}>Click Me!</button>
        <button onMouseOver={this.handleOnMouseOver}>Hover Me!</button>
      </div>
    );
  }
}

export default MyComponent;
