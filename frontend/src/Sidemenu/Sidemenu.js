import React from 'react';
import { ImBooks, ImBook, ImFolderPlus, ImExit } from "react-icons/im";
import { NavLink } from 'react-router-dom'
import './Sidemenu.css';
// import { AppContext } from '../App/AppContext';
import { ReactComponent as Logo } from '../logo/producktiv.svg'


export const Sidemenu = (props) => {
  // const data = React.useContext(AppContext)
  const menuItems = [
    {
      path:"/videos",
      name:"All Courses",
      icon: <ImBook/>
    },
    {
      path:"/courses",
      name:"My Courses",
      icon: <ImBooks/>
    },
    {
      path:"/add-course",
      name:"Add Course",
      icon: <ImFolderPlus/>
    }
  ]

  return (
    <div className="sidemenu-container">
      <div className="sidemenu-box">
        <div className="sidemenu">
          <div className="sidemenu-heading">
            <Logo className='logo'/>
            {/* <img src={logo} style={{width: "90px"}}/> */}
            {/* <div className="user-details">
              <p style={{color: "white"}}>Welcome, {data.user.username}!</p>
            </div> */}
          </div>
          <div className="menu-items">
            {
            menuItems.map((item, index) => {
              return <NavLink to={item.path} key={index} className="item-link">
                <div className="item-icon">{item.icon}</div>
                <div className="item-text"><p>{item.name}</p></div>
              </NavLink>
            })
          }
          </div>
          <div className="item-link logout" >
            <div className="item-icon"><ImExit/></div>
            <div className="item-text"><p onClick={() => props.logOut()}>Logout</p></div>
          {/* <p  onClick={() => props.logOut()}>Logout</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}
