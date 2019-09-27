import React, { useState } from 'react';
import styled from 'styled-components';

//State
import { useStateValue } from '../state';

//Components
import { Sidebar, Menu, Responsive, Icon, Image } from 'semantic-ui-react';
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
                    content={
                        <Image
                            src="https://prisoner-skills-app.github.io/UI/img/logo.png"
                            size="tiny"
                        />
                    }
                    onClick={() => setVisible(false)}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
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
                    as="a"
                    href="https://prisoner-skills-app.github.io/UI/contact.html"
                    content="Contact Us"
                    onClick={() => setVisible(false)}
                />
                <Menu.Item
                    as="a"
                    href="https://prisoner-skills-app.github.io/UI/about.html"
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
                style={{ height: '100vh', paddingTop: 58, overflow: 'scroll' }}
            >
                {/* Desktop */}
                <Responsive
                    as={Menu}
                    fixed="top"
                    minWidth={Responsive.onlyTablet.minWidth}
                >
                    <Menu.Item as={Link} to="/" header>
                        <Image
                            src="https://prisoner-skills-app.github.io/UI/img/logo.png"
                            size="tiny"
                        />
                    </Menu.Item>
                    <Menu.Item as={Link} to="/candidates">
                        Candidates
                    </Menu.Item>
                    <Menu.Item as={Link} to="/prisons">
                        Prisons
                    </Menu.Item>
                    <Menu.Item
                        as="a"
                        href="https://prisoner-skills-app.github.io/UI/about.html"
                    >
                        About Us
                    </Menu.Item>
                    <Menu.Item
                        as="a"
                        href="https://prisoner-skills-app.github.io/UI/contact.html"
                    >
                        Contact Us
                    </Menu.Item>
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
                    <Menu.Item as={Link} to="/" header>
                        <Image
                            src="https://prisoner-skills-app.github.io/UI/img/logo.png"
                            size="tiny"
                        />
                    </Menu.Item>
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
