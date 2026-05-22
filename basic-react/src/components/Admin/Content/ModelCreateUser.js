import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IoAddCircle } from "react-icons/io5";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { postCreateNewUser } from "../../../services/apiServices";

const ModalCreateUser = (props) => {
  const { show, setShow } = props;

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setPassword("");
    setUsername("");
    setRole("USER");
    setImage("");
    setPreviewImage("");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  const handUpLoadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    } else {
      // setPreviewImage("");
    }
  };

  const validateEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/;

    return regex.test(String(email).toLowerCase());
  };

  const handSubmitCreateUser = async () => {
    //validate
    // const isValidEmail = validateEmail(email);
    // if (!isValidEmail) {
    //   toast.error("Invalid email!");
    //   return;
    // }

    if (!password) {
      toast.error("Invalid password!");
      return;
    }

    let data = await postCreateNewUser(email, password, username, role, image);
    console.log("Component res:", data);
    if (data && data.EC === 0) {
      toast.success("Add user successful!");
      handleClose();
    }

    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal
        className="model-add-user"
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email address</label>
              <input
                value={email}
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                value={password}
                type="password"
                className="form-control"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Username</label>
              <input
                value={username}
                type="text"
                className="form-control"
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Role</label>
              <select
                className="form-select"
                onChange={(event) => setRole(event.target.value)}
                value={role}
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>

            <div className="col-md-12">
              <label className="form-label label-upload" htmlFor="labelUpload">
                <IoAddCircle size={30} color="white" /> Upload image
              </label>
              <input
                type="file"
                id="labelUpload"
                hidden
                onChange={(event) => handUpLoadImage(event)}
              />
            </div>

            <div className="col-md-12 img-preview">
              {previewImage ? (
                <img src={previewImage} />
              ) : (
                <span>Preview image</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handSubmitCreateUser()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreateUser;
