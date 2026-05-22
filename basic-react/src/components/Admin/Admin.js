import SideBar from "./SideBar";
import "./Admin.scss";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Outlet } from "react-router";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="admin-container">
      <div className={`admin-sidebar ${collapsed ? "collapsed" : ""}`}>
        <SideBar collapsed={collapsed} />
      </div>

      <div className="admin-content">
        <div className="admin-header">
          <FaBars
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "22px",
              cursor: "pointer",
              marginBottom: "20px",
            }}
          />
        </div>

        <div className="admin-main">
          <Outlet />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default Admin;
