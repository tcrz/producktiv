import React, { useState } from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import ModalWindow from "../ModalWindow/ModalWindow";

export default function VideoDeletionModal(props) {
  const [open, setOpen] = useState(false);
  const confirmDeletion = () => {
    props.deleteVideo(props.id);
    setOpen(false);
  };
  return (
    <ModalWindow
      size={"tiny"}
      trigger={props.trigger}
      setOpen={setOpen}
      open={open}
    >
      <Header as="h3" content="Delete Video" />
      <Modal.Content>
        <p>Are you sure you would like to delete this video?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="grey" onClick={() => setOpen(false)}>
          No
        </Button>
        <Button color="red" onClick={confirmDeletion}>
          Yes
        </Button>
      </Modal.Actions>
    </ModalWindow>
  )
}