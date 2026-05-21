import React, { useState } from "react";

const AddUserInfo = (props) => {
  // state = {
  //   name: "Lita",
  //   address: "Ho Chi Minh City",
  //   age: 21,
  // };

  const [name, setName] = useState("");
  const [address, setAddress] = useState("Ho Chi Minh City");
  const [age, setAge] = useState("");

  const handleOnChangeInput = (event) => {
    // this.setState({
    //   name: event.target.value,
    // });
    setName(event.target.value);
  };

  const handleOnChangeAge = (event) => {
    // this.setState({
    //   age: event.target.value,
    // });
    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: age,
    });
  };
  return (
    <div>
      My name is {name} and I'm {age}
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Your name: </label>
        <input
          value={name}
          type="text"
          onChange={(event) => handleOnChangeInput(event)}
        />

        <label>Your age: </label>
        <input
          value={age}
          type="number"
          onChange={(event) => handleOnChangeAge(event)}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUserInfo;
