import React from 'react';

//State
import { useStateValue } from '../../state';

//Components
import { Route, Switch } from 'react-router-dom';
import { Message } from 'semantic-ui-react';

//Custom Components
import { ColumnContainer } from '../../globals/components';

//Scenes
import CreateProfile from './CreateProfile';
import AllProfiles from './AllProfiles';

//Dummby Routes
const Header = () => <h1>User Profile Header</h1>;
const EditProfile = () => <h1>Edit Profile</h1>;
const Settings = () => <h1>Settings</h1>;

const UserAccount = () => {
    const [{ user, candidates }, dispatch] = useStateValue();

    return (
        <ColumnContainer>
            <Header />
            {candidates && candidates.length == 0 && (
                <Message
                    compact
                    positive
                    size="small"
                    icon="inbox"
                    content="Fantastic! Now create your first candidate profile!"
                    onDismiss={() => alert('dismissed')}
                />
            )}
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
