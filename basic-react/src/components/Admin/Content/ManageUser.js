import ModalCreateUser from "./ModelCreateUser";
import "./ManageUser.scss";

const ManageUser = (props) => {
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>

      <div className="users-content">
        <button>Add new user</button>

        <div>Table Users</div>
        <ModalCreateUser />
      </div>
    </div>
  );
};

export default ManageUser;
