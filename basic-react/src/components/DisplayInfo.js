import React from "react";
import "./DisplayInfo.scss";
import logo from "./../logo.svg";

class DisplayInfo extends React.Component {
  constructor(props) {
    console.log("Call constructor: 1");
    super(props);
    this.state = {
      isShowListUser: true,
    };
  }

  componentDidMount() {
    console.log("Call me component did mount");
    setTimeout(() => {
      document.title = "Lita Nguyen";
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Call me component did update", this.props, prevProps);
    if (this.props.listUsers !== prevProps.listUsers) {
      if (this.props.listUsers.length === 5) {
        alert("You got 5 users");
      }
    }
  }

  handShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };

  render() {
    console.log("Call me render");
    const { listUsers } = this.props;
    console.log(listUsers);
    return (
      <div className="display-info-container">
        <img src={logo} />
        <div>
          <span
            onClick={() => {
              this.handShowHide();
            }}
          >
            {this.state.isShowListUser == true
              ? "Hide list users:"
              : "Show list users:"}
          </span>
        </div>

        {this.state.isShowListUser && (
          <>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name is {user.name}</div>
                  <div>My age is {user.age}</div>
                  <div>
                    <button
                      onClick={() => this.props.handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </div>
                  <hr />
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default DisplayInfo;
