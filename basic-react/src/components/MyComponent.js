import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
  render() {
    const { myInfo } = ["a", "b", "c"];
    return (
      <div>
        <UserInfo />
        <br />
        <br />
        <DisplayInfo name="Lita Nguyen" age={22} myInfo={myInfo} />
      </div>
    );
  }
}

export default MyComponent;
