import React from 'react';
import 'semantic-ui-css/semantic.min.css';

//Components
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import { SignUp } from '../../components';

//Custom Components
import { NavBar } from '../../components';

//State
import { useStateValue } from '../../state';

//Styled Components CSS

//Scenes
import UserAccount from '../User';
import AllCandidates from '../AllCandidates';
import AllPrisons from '../AllPrisons';
import PrisonProfile from '../Public/Prison';

//Dumby Components for Routes
const Login = () => <h1>Login / Sign up</h1>;

const App = () => {
    return (
        <BrowserRouter>
            <NavBar>
                <Switch>
                    <PrivateRoute path="/me" component={UserAccount} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/onboarding" component={SignUp} />
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
                true ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
};
