import React from 'react';

//State
import { useStateValue } from '../../state';

//Components
import { Route, Switch, Link } from 'react-router-dom';
import { Button, Message } from 'semantic-ui-react';

//Custom Components
import { ColumnContainer } from '../../globals/components';

//Scenes
import CreateProfile from './CreateProfile';
import EditProfile from './EditProfile';
import AllProfiles from './AllProfiles';

//Dummby Routes
const Header = () => <h1>User Profile Header</h1>;
const Settings = () => <h1>Settings</h1>;

const UserAccount = () => {
    const [{ user, candidates }, dispatch] = useStateValue();

    return (
        <ColumnContainer>
            <Header />
            <Button
                as={Link}
                to="/me/settings"
                content="Settings"
                color="blue"
            />
            <Switch>
                <Route exact path="/me" component={AllProfiles} />
                <Route path="/me/create-profile" component={CreateProfile} />
                <Route path="/me/edit-profile" component={EditProfile} />
                <Route path="/me/settings" component={Settings} />
            </Switch>
        </ColumnContainer>
    );
};

export default UserAccount;
