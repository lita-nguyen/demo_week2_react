import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Lita Nguyen", age: "21" },
      { id: 2, name: "PigPiPo", age: "25" },
      { id: 3, name: "Linh", age: "12" },
    ],
  };

  handleAddNewUser = (userObj) => {
    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };

  render() {
    return (
      <>
        <div className="a">
          <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
          <br />
          <br />
          <DisplayInfo listUsers={this.state.listUsers} />
        </div>

        <div className="b"></div>
      </>
    );
  }
}

export default MyComponent;
