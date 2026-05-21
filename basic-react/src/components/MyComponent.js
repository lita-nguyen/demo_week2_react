import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Lita Nguyen", age: "21" },
    { id: 2, name: "PigPiPo", age: "25" },
    { id: 3, name: "Linh", age: "12" },
  ]);

  const handleAddNewUser = (userObj) => {
    setListUsers([userObj, ...listUsers]);
  };

  const handleDeleteUser = (userId) => {
    let listUserClone = listUsers;
    listUserClone = listUserClone.filter((item) => item.id !== userId);
    setListUsers(listUserClone);
  };
  return (
    <>
      <div className="a">
        <AddUserInfo handleAddNewUser={handleAddNewUser} />
        <br />
        <br />
        <DisplayInfo
          listUsers={listUsers}
          handleDeleteUser={handleDeleteUser}
        />
      </div>

      <div className="b"></div>
    </>
  );
};

export default MyComponent;
