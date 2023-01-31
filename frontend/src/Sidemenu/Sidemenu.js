import React from "react";
import { ImBooks, ImBook, ImFolderPlus, ImExit } from "react-icons/im";
import { NavLink } from "react-router-dom";
import "./Sidemenu.css";
import { ReactComponent as Logo } from "../logo/producktiv.svg";
import { Modal } from "semantic-ui-react";

export const Sidemenu = (props) => {
  const menuItems = [
    {
      path: "/videos",
      name: "All Courses",
      icon: <ImBook />,
    },
    {
      path: "/courses",
      name: "My Courses",
      icon: <ImBooks />,
    },
    {
      path: "/add-course",
      name: "Add Course",
      icon: <ImFolderPlus />,
    },
  ];

  return (
    <>
      <div className="sidemenu-container">
        <div className="sidemenu-box">
          <div className="sidemenu">
            <div className="sidemenu-heading">
              <Logo className="logo" />
            </div>
            <div className="menu-items">
              {menuItems.map((item, index) => {
                return (
                  <NavLink to={item.path} key={index} className="item-link">
                    <div className="item-icon">{item.icon}</div>
                    <div className="item-text">
                      <p>{item.name}</p>
                    </div>
                  </NavLink>
                );
              })}
            </div>
              <Modal
                size="tiny"
                actions={[
                  "No",
                  {
                    key: "yes",
                    content: "Yes",
                    negative: true,
                    onClick: props.logOut,
                  },
                ]}
                trigger={
                  <div className="item-link logout">
                    <div className="item-icon">
                      <ImExit />
                    </div>
                    <div className="item-text">
                      <p>Logout</p>
                    </div>
                  </div>
                }
                header="Log out"
                content="Are you sure you would like to log out?"
              />
            </div>
          </div>
        </div>
    </>
  );
};
