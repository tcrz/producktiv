import React from "react";
import { Modal } from "semantic-ui-react";

export default function ModalWindow(props) {
  return (
    <Modal
      size={props.size}
      open={props.open}
      trigger={props.trigger}
      onClose={() => props.setOpen(false)}
      onOpen={() => props.setOpen(true)}
    >
      {props.children}
    </Modal>
  );
}
