import React, { useState } from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import ModalWindow from "./ModalWindow";

export default function ConfirmationModal(props) {
  const [open, setOpen] = useState(false);
  const triggerAction = () => {
    props.action();
    setOpen(false);
  };
  return (
    <ModalWindow
      size={"tiny"}
      trigger={props.trigger}
      setOpen={setOpen}
      open={open}
    >
      <Header as="h3" content={props.content} />
      <Modal.Content>
        <p>{props.message}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="grey" onClick={() => setOpen(false)}>
          No
        </Button>
        <Button color="red" onClick={triggerAction}>
          Yes
        </Button>
      </Modal.Actions>
    </ModalWindow>
  )
}