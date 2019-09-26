import React from 'react';

//State
import { useStateValue } from '../../state';

//Components
import { ColumnContainer } from '../../globals/components';
import { Button, Tab } from 'semantic-ui-react';

//Components
import { AccountSettingsForm } from '../../components';

const Settings = ({ history }) => {
    const [{ user }, dispatch] = useStateValue();

    const panes = [
        {
            menuItem: 'Account Settings',
            render: () => (
                <Tab.Pane as="div">
                    <AccountSettingsForm />
                </Tab.Pane>
            ),
        },
        {
            menuItem: 'Delete Account',
            render: () => (
                <Tab.Pane as="div">
                    <p style={{ color: 'red' }}>
                        Warning! Clicking this button will permenantly deleting
                        your account. Proceed with caution!
                    </p>
                    <Button
                        content="Delete Account"
                        color="red"
                        onClick={() => {
                            dispatch({
                                type: 'delete_user',
                            });
                            history.push('/');
                        }}
                    />
                </Tab.Pane>
            ),
        },
        {
            menuItem: 'Logout',
            render: () => (
                <Tab.Pane as="div">
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
                </Tab.Pane>
            ),
        },
    ];

    return (
        <ColumnContainer padding="1.3em">
            <h2>My Account</h2>
            <Tab
                menu={{ fluid: true, vertical: true, tabular: true }}
                panes={panes}
            />
        </ColumnContainer>
    );
};

export default Settings;
