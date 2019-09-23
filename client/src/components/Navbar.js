import React, { useState } from 'react';
import styled from 'styled-components';

//Components
import { Sidebar, Menu, Responsive, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

//Styled Components
const MobileMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const NavBar = ({ children }) => {
    const [visible, setVisible] = useState(false);

    return (
        <Sidebar.Pushable>
            <Sidebar
                as={Menu}
                animation="overlay"
                visible={visible}
                direction="top"
                onHide={() => setVisible(false)}
                text
                vertical
                fluid
                size="massive"
                style={{
                    textAlign: 'center',
                    padding: 40,
                    backgroundColor: 'white',
                }}
            >
                <Menu.Item as={Link} to="/" content="Home" />
                <Menu.Item
                    as={Link}
                    to="/candidates"
                    content="Explore Candidates"
                />
                <Menu.Item as={Link} to="/prisons" content="Explore Prisons" />
                <Menu.Item as={Link} to="/" content="Contact Us" />
                <Menu.Item as={Link} to="/" content="About Us" />
                {true ? (
                    <Menu.Item as={Link} to="/me" content="My Account" />
                ) : (
                    <Menu.Item
                        as={Link}
                        to="/login"
                        content="Login / Sign Up"
                    />
                )}
            </Sidebar>
            <Sidebar.Pusher style={{ height: '100vh' }}>
                {/* Desktop */}
                <Responsive
                    as={Menu}
                    attached="top"
                    minWidth={Responsive.onlyTablet.minWidth}
                >
                    <Menu.Item as={Link} to="/" header>
                        Prisoner Skills
                    </Menu.Item>
                    <Menu.Item>About Us</Menu.Item>
                    <Menu.Item>Contact Us</Menu.Item>
                    <Menu.Menu position="right">
                        <Menu.Item>Login / Sign Up</Menu.Item>
                    </Menu.Menu>
                </Responsive>

                {/* Mobile */}
                <Responsive
                    as={Menu}
                    attached="top"
                    maxWidth={Responsive.onlyMobile.maxWidth}
                >
                    <Menu.Item header>Prisoner Skills</Menu.Item>
                    <Menu.Menu position="right">
                        <Menu.Item onClick={() => setVisible(true)}>
                            <Icon name="bars" />
                        </Menu.Item>
                    </Menu.Menu>
                </Responsive>
                {children}
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    );
};

export default NavBar;
