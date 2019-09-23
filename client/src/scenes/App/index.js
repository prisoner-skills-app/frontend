import React from 'react';
import 'semantic-ui-css/semantic.min.css';

//Components
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

//Custom Components

//State
import { useStateValue } from '../../state';

//Styled Components CSS

//Scenes
import UserAccount from '../User';

//Dumby Components for Routes
const AllCandidates = () => <h1>All Candidates</h1>;
const AllPrisons = () => <h1>All Prisons</h1>;
const PrisonProfile = () => <h1>Prison Profile Route</h1>;
const CandidateProfile = () => <h1>Candidate Profile Route</h1>;
const Login = () => <h1>Login / Sign up</h1>;
const SignUp = () => <h1>Onboarding</h1>;

const App = () => {
    return (
        <BrowserRouter>
            <Header as="h1" content="Prisoner Skills" />
            <Switch>
                <PrivateRoute path="/me" component={UserAccount} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/onboarding" component={SignUp} />
                <Route exact path="/candidates" component={AllCandidates} />
                <Route exact path="/prisons" component={AllPrisons} />
                <Route
                    path="/:prison-name/:candidate-id"
                    component={CandidateProfile}
                />
                <Route exact path="/:prison-name" component={PrisonProfile} />
            </Switch>
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
