import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
import Settings from './Settings';

const UserAccount = ({ history }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [{ user, candidates }, dispatch] = useStateValue();

    //Redirect to onboarding if profile is incomplete
    if (!user.profileComplete) {
        history.push('/onboarding');
    }

    useEffect(() => {
        setIsLoading(true);
        //let prisonId = location.pathname;
        //let url = `api/prions/${prisonId}`;
        if (!candidates || candidates.length == 0) {
            let url = `https://lsbw-liberated-skills.herokuapp.com/api/centers/${user.id}`;
            axios
                .get(url)
                .then(res => {
                    if (res.status !== 200) {
                        throw new Error('did not fetch all prisons');
                    }
                    console.log(res);
                    dispatch({
                        type: 'set_user_candidates',
                        payload: res.data.persons,
                    });
                    dispatch({
                        type: 'update_user',
                        payload: res.data.center,
                    });
                    setIsLoading(false);
                })
                .catch(err => {
                    console.log(err);
                    setIsLoading(false);
                });
        }
        setIsLoading(false);
    }, []);

    return (
        <ColumnContainer>
            {isLoading ? (
                <h1>Loading</h1>
            ) : (
                <>
                    <Header
                        backButton
                        title={user.name}
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
                        <Route
                            path="/me/create-profile"
                            component={CreateProfile}
                        />
                        <Route
                            path="/me/edit-profile"
                            component={EditProfile}
                        />
                        <Route path="/me/settings" component={Settings} />
                    </Switch>
                </>
            )}
        </ColumnContainer>
    );
};

export default UserAccount;
