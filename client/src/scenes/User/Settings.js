import React from 'react';

//State
import { useStateValue } from '../../state';
import { Button } from 'semantic-ui-react';

//Dummy Components

const Settings = ({ history }) => {
    const [{ user }, dispatch] = useStateValue();

    return (
        <>
            <Button
                content="Logout"
                color="red"
                onClick={() => {
                    dispatch({
                        type: 'logout_user',
                    });
                    history.replace('/');
                }}
            />
        </>
    );
};

export default Settings;
