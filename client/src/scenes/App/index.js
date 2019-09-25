import React, { useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css';

//Components
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

//Custom Components
import { NavBar, SignUp, LogIn, AccountSettingsForm } from '../../components';

//State
import { useStateValue } from '../../state';

//Styled Components CSS

//Scenes
import UserAccount from '../User';
import AllCandidates from '../AllCandidates';
import AllPrisons from '../AllPrisons';
import PrisonProfile from '../Public/Prison';
import LoginSignup from '../LoginSignup';
import Onboarding from '../Onboarding';

const App = () => {
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        if (window.localStorage.getItem('token')) {
            dispatch({
                type: 'set_user',
                payload: {
                    token: window.localStorage.getItem('token'),
                    id: window.localStorage.getItem('id'),
                },
            });
        }
    }, []);

    return (
        <BrowserRouter>
            <NavBar>
                <Switch>
                    <PrivateRoute path="/me" component={UserAccount} />
                    <Route exact path="/login" component={LoginSignup} />
                    <Route exact path="/onboarding" component={Onboarding} />
                    <Route exact path="/candidates" component={AllCandidates} />
                    <Route exact path="/prisons" component={AllPrisons} />
                    <Route path="/:prison" component={PrisonProfile} />
                </Switch>
            </NavBar>
        </BrowserRouter>
    );
};

export default App;

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                window.localStorage.getItem('token') ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};
