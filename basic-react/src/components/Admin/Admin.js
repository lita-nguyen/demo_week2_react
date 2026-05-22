import SideBar from "./SideBar";
import "./Admin.scss";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Outlet } from "react-router";

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
    </div>
  );
};

export default Admin;
