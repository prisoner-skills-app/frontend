import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

const WarningModal = () => (
  <Modal trigger={<Button>Show Modal</Button>} closeIcon>
    <Header content="Warning" color="red" />
    <Modal.Content>
      <p>
        Are you sure you want to delete Elliot? This is a permanent operation
        and you will have to recreate Elliot in the future.
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button color="red">
        <Icon name="remove" /> Delete
      </Button>
      <Button color="green">
        <Icon name="checkmark" /> Cancel
      </Button>
    </Modal.Actions>
  </Modal>
);

export default WarningModal;

