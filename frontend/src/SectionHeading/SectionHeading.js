import React from 'react';
import { AppContext } from "../App/AppContext";
import { Label } from "semantic-ui-react";

export const SectionHeading = (props) => {
const { user } = React.useContext(AppContext);

  return (
    <div style={{display: "flex", alignItems:'flex-start'}}>
        <h1>{props.title}</h1>
        {user.username === "Testrun" && <Label color='red' size='mini' horizontal>Test run</Label>}
    </div>
  )
}
