import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaGem,
  FaGithub,
  FaRegLaughWink,
} from "react-icons/fa";

import sidebarBg from "../../assets/bg2.png";

const SideBar = ({ collapsed }) => {
  return (
    <Sidebar
      collapsed={collapsed}
      image={sidebarBg}
      rootStyles={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        border: "none",
      }}
    >
      {/* OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255, 255, 255, 0.7)",
          zIndex: 0,
        }}
      ></div>

      {/* CONTENT WRAPPER */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            padding: "24px",
            fontWeight: "bold",
            fontSize: 20,
            color: "#222",
            borderBottom: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          Lita Nguyen
        </div>

        {/* MENU */}
        <div style={{ flex: 1, paddingTop: "10px" }}>
          <Menu
            menuItemStyles={{
              button: {
                padding: "12px 20px",
                borderRadius: "8px",
                color: "#333",
                "&:hover": {
                  backgroundColor: "rgba(229, 104, 26, 0.08)",
                  color: "#000",
                },
              },
            }}
          >
            <MenuItem
              icon={<FaTachometerAlt />}
              suffix={<span className="badge red">New</span>}
            >
              Dashboard
            </MenuItem>

            <MenuItem icon={<FaGem />}>Components</MenuItem>

            <SubMenu
              label="More"
              icon={<FaRegLaughWink />}
              suffix={<span className="badge yellow">3</span>}
            >
              <MenuItem>Item 1</MenuItem>
              <MenuItem>Item 2</MenuItem>
              <MenuItem>Item 3</MenuItem>
            </SubMenu>
          </Menu>
        </div>

        {/* FOOTER */}
        <div
          style={{
            padding: "20px",
            borderTop: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          <a
            href="https://github.com/lita-nguyen/demo_week2_react/tree/master/basic-react"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              color: "#333",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            <FaGithub />
            viewSource
          </a>
        </div>
      </div>
    </Sidebar>
  );
};

export default SideBar;
