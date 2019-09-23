import React, { useState } from 'react';

//Components
import { SideBar, Menu } from 'semantic-ui-react';

const NavBar = () => {
    const [visible, setVisible] = useState(false);

    return (
        <SideBar.Pushable>
            <SideBar
                as={Menu}
                animation="overlay"
                visible={false}
                direction="top"
                onHide={() => setVisible}
            ></SideBar>
        </SideBar.Pushable>
    );
};

export default NavBar;
