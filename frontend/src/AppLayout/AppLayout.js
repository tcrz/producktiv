import React from "react";
import './AppLayout.css';
// import { AppContext } from "../App/AppContext";
import { Sidemenu } from "../Sidemenu/Sidemenu";
import { Dimmer, Loader } from "semantic-ui-react";

export const AppLayout = (props) => {
  // const data = React.useContext(AppContext);
  return (
    <div className="container">
      {props.isLoading && (
        <Dimmer active page>
          <Loader>Logging out..</Loader>
        </Dimmer>
      )}
      <Sidemenu logOut={props.logOut} />
      <main>{props.children}</main>
    </div>
  );
};
