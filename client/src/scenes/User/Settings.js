import React from 'react';

//State
import { useStateValue } from '../../state';

//Dummy Components
const Header = () => <h1>Settings</h1>;

const Settings = ({}) => {
    const [{ user }, dispatch] = useStateValue();

    return (
        <>
            <Header />
        </>
    );
};

export default Settings;
