import React, { useState } from 'react';
import styled from 'styled-components';

//State
import { useStateValue } from '../state';

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
    const [{ user }, dispatch] = useStateValue();

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
                fixed="top"
                size="massive"
                style={{
                    textAlign: 'center',
                    padding: 40,
                    backgroundColor: 'white',
                }}
            >
                <Menu.Item
                    as={Link}
                    to="/"
                    content="Home"
                    onClick={() => setVisible(false)}
                />
                <Menu.Item
                    as={Link}
                    to="/candidates"
                    content="Explore Candidates"
                    onClick={() => setVisible(false)}
                />
                <Menu.Item
                    as={Link}
                    to="/prisons"
                    content="Explore Prisons"
                    onClick={() => setVisible(false)}
                />
                <Menu.Item
                    as={Link}
                    to="/"
                    content="Contact Us"
                    onClick={() => setVisible(false)}
                />
                <Menu.Item
                    as={Link}
                    to="/"
                    content="About Us"
                    onClick={() => setVisible(false)}
                />
                {user ? (
                    <Menu.Item
                        as={Link}
                        to="/me"
                        content="My Account"
                        onClick={() => setVisible(false)}
                    />
                ) : (
                    <Menu.Item
                        as={Link}
                        to="/login"
                        content="Login / Sign Up"
                        onClick={() => setVisible(false)}
                    />
                )}
            </Sidebar>
            <Sidebar.Pusher
                style={{ height: '100vh', paddingTop: 42, overflow: 'scroll' }}
            >
                {/* Desktop */}
                <Responsive
                    as={Menu}
                    fixed="top"
                    minWidth={Responsive.onlyTablet.minWidth}
                >
                    <Menu.Item as={Link} to="/" header>
                        Prisoner Skills
                    </Menu.Item>
                    <Menu.Item as={Link} to="/candidates">
                        Candidates
                    </Menu.Item>
                    <Menu.Item as={Link} to="/prisons">
                        Prisons
                    </Menu.Item>
                    <Menu.Item>About Us</Menu.Item>
                    <Menu.Item>Contact Us</Menu.Item>
                    <Menu.Menu position="right">
                        {user && user.token ? (
                            <Menu.Item as={Link} to="/me">
                                My Account
                            </Menu.Item>
                        ) : (
                            <Menu.Item as={Link} to="/login">
                                Login / Sign Up
                            </Menu.Item>
                        )}
                    </Menu.Menu>
                </Responsive>

                {/* Mobile */}
                <Responsive
                    as={Menu}
                    fixed="top"
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
