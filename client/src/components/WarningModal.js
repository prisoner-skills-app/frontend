import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

import { useStateValue } from '../state';

const WarningModal = ({ id }) => {
    const [state, dispatch] = useStateValue();

    console.log(id);
    return (
        <Modal
            trigger={
                <Button basic color="red">
                    Delete
                </Button>
            }
            closeIcon
            closeOnDimmerClick
            closeOnDocumentClick
        >
            <Header content="Warning" color="red" />
            <Modal.Content>
                <p>
                    Are you sure you want to delete Elliot? This is a permanent
                    operation and you will have to recreate Elliot in the
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
                    }}
                >
                    <Icon name="remove" /> Delete
                </Button>
                <Button color="green">
                    <Icon name="checkmark" /> Cancel
                </Button>
            </Modal.Actions>
        </Modal>
    );
};

export default WarningModal;
