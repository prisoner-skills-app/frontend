import React, { useState } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

import { useStateValue } from '../state';

const WarningModal = ({ id, name }) => {
    const [state, dispatch] = useStateValue();
    const [open, setOpen] = useState(false);

    console.log(id);
    return (
        <Modal
            trigger={
                <Button basic color="red" onClick={() => setOpen(true)}>
                    Delete
                </Button>
            }
            closeIcon
            closeOnDimmerClick={true}
            closeOnDocumentClick={true}
            open={open}
            size="tiny"
        >
            <Header content="Warning" color="red" />
            <Modal.Content>
                <p>
                    Are you sure you want to delete {name}? This is a permanent
                    operation and you will have to recreate {name} in the
                    future.
                </p>
            </Modal.Content>
            <Modal.Actions>
                <Button
                    color="red"
                    onClick={() => {
                        dispatch({
                            type: 'delete_candidate',
                            payload: id,
                        });
                        setOpen(false);
                    }}
                >
                    <Icon name="remove" /> Delete
                </Button>
                <Button color="green" onClick={() => setOpen(false)}>
                    <Icon name="checkmark" /> Cancel
                </Button>
            </Modal.Actions>
        </Modal>
    );
};

export default WarningModal;
