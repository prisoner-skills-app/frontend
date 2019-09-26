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
                    <Button
                        content="Delete Account"
                        color="red"
                        onClick={() => alert('Deleting')}
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
