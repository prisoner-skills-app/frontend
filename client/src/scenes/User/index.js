import React from 'react';

//State
import { useStateValue } from '../../state';

//Components
import { Route, Switch, Link } from 'react-router-dom';
import { Button, Message } from 'semantic-ui-react';
import { Header } from '../../components';

//Custom Components
import { ColumnContainer } from '../../globals/components';

//Scenes
import CreateProfile from './CreateProfile';
import EditProfile from './EditProfile';
import AllProfiles from './AllProfiles';

//Dummby Routes
const Settings = () => <h1>Settings</h1>;

const UserAccount = ({ history }) => {
    const [{ user, candidates }, dispatch] = useStateValue();

    //Redirect to onboarding if profile is incomplete
    // if (!user.profileComplete) {
    //     history.push('/onboarding');
    // }

    return (
        <ColumnContainer>
            <Header
                title="Hunstville Corrections"
                subtitle={
                    <Link
                        to="/me/settings"
                        style={{ color: 'white', fontSize: '1.2em' }}
                    >
                        Settings
                    </Link>
                }
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
