import React, { useState } from 'react';

//Components
import { Sidebar, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavBar = ({ children }) => {
    const [visible, setVisible] = useState(false);

    return (
        <Sidebar.Pushable>
            <Sidebar
                as={Menu}
                animation="overlay"
                visible={false}
                direction="top"
                onHide={() => setVisible}
            ></Sidebar>
            <Sidebar.Pusher>
                <Menu attached="top">
                    <Menu.Item>Prisoner Skills</Menu.Item>
                    <Menu.Item>Prisoner Skills</Menu.Item>
                    <Menu.Item>Prisoner Skills</Menu.Item>
                    <Menu.Menu position="right">
                        <Menu.Item>Login / Sign Up</Menu.Item>
                    </Menu.Menu>
                </Menu>
                {children}
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    );
};

export default NavBar;
