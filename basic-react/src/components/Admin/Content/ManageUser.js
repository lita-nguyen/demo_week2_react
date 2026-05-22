import ModalCreateUser from "./ModelCreateUser";

const ManageUser = (props) => {
  return (
    <div classNameName="manage-user-container">
      <div classNameName="title">Manage User</div>

      <div classNameName="users-content">
        <button>Add new user</button>

        <div>
          Table Users
          <ModalCreateUser />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
