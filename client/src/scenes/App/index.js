import React, { useState, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css';

//Components
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";

//Custom Components
import {
  NavBar,
  SignUp,
  Header,
  LogIn,
  OnboardingComplete,
  AccountSettingsForm
} from "../../components";

//State
import { useStateValue } from "../../state";

//Styled Components CSS

//Scenes
import UserAccount from '../User';
import AllCandidates from '../AllCandidates';
import AllPrisons from '../AllPrisons';
import PrisonProfile from '../Prison';
import LoginSignup from '../LoginSignup';
import Onboarding from '../Onboarding';
import Home from '../Home';

const App = () => {
    const [{ user }, dispatch] = useStateValue();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (window.localStorage.getItem('user')) {
            dispatch({
                type: 'set_user',
                payload: JSON.parse(window.localStorage.getItem('user')),
            });
        }
        setLoading(false);
    }, []);

    return (
        <BrowserRouter>
            <NavBar>
                {loading ? (
                    <h1>Loading</h1>
                ) : (
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <PrivateRoute
                            path="/me"
                            component={UserAccount}
                            user={user}
                        />
                        <Route exact path="/login" component={LoginSignup} />
                        <Route
                            exact
                            path="/onboarding"
                            component={Onboarding}
                        />
                        <Route
                            exact
                            path="/candidates"
                            component={AllCandidates}
                        />
                        <Route exact path="/prisons" component={AllPrisons} />
                        <Route path="/:prison" component={PrisonProfile} />
                    </Switch>
                )}
            </NavBar>
        </BrowserRouter>
    );
};

export default App;

const PrivateRoute = ({ user, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                user.token ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
};
