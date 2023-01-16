import React from "react";
import './AppLayout.css';
import { AppContext } from "../App/AppContext";
import { Sidemenu } from "../Sidemenu/Sidemenu";

export const AppLayout = (props) => {
  // const data = React.useContext(AppContext);
  return (
    <div className="container">
      <Sidemenu logOut={props.logOut}/>
      <main>{props.children}</main>
    </div>
  );
};
