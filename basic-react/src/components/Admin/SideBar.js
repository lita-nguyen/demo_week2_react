import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FaTachometerAlt, FaGem, FaGithub } from "react-icons/fa";
import { TbPigFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

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
          background: "rgba(255,255,255,0.8)",
          zIndex: 0,
        }}
      />

      {/* CONTENT */}
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
            padding: "20px",
            fontWeight: 600,
            fontSize: 18,
            color: "#222",
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            justifyContent: collapsed ? "center" : "flex-start",
          }}
        >
          <TbPigFilled size={40} color="#f9711c" />
          {!collapsed && (
            <span
              style={{
                opacity: collapsed ? 0 : 1,
                transition: "opacity 0.2s ease",
                whiteSpace: "nowrap",
              }}
            >
              Lita Nguyen
            </span>
          )}
        </div>

        {/* MENU */}
        <div style={{ flex: 1, paddingTop: "10px" }}>
          <Menu
            menuItemStyles={{
              button: {
                padding: "12px 16px",
                borderRadius: "10px",
                color: "#333",
                display: "flex",
                justifyContent: collapsed ? "center" : "flex-start",
                "&:hover": {
                  backgroundColor: "rgba(249,113,28,0.1)",
                },
              },
            }}
          >
            <MenuItem
              icon={<FaTachometerAlt size={22} />}
              component={<Link to="/admins" />}
            >
              {!collapsed && "Dashboard"}
            </MenuItem>

            <SubMenu
              label={!collapsed && "Management"}
              icon={<FaGem size={22} />}
              suffix={!collapsed && <span className="badge yellow">3</span>}
            >
              <MenuItem component={<Link to="/admins/manage-users" />}>
                {!collapsed && "User"}
              </MenuItem>
              <MenuItem>Quiz</MenuItem>
              <MenuItem>Question</MenuItem>
            </SubMenu>
          </Menu>
        </div>

        {/* FOOTER */}
        <div
          style={{
            padding: "16px",
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
            <FaGithub size={22} />
            {!collapsed && (
              <span
                style={{
                  opacity: collapsed ? 0 : 1,
                  transition: "opacity 0.2s ease",
                  whiteSpace: "nowrap",
                }}
              >
                Lita Nguyen
              </span>
            )}
          </a>
        </div>
      </div>
    </Sidebar>
  );
};

export default SideBar;
