import React from 'react';
import 'semantic-ui-css/semantic.min.css';

//Components
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

//Custom Components

//State
import { useStateValue } from '../../state';

//Styled Components CSS

const App = () => {
    return (
        <BrowserRouter>
            <Header as="h1" content="Prisoner Skills" />
        </BrowserRouter>
    );
};

export default App;

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                true ? <Component {...props} /> : <Redirect to="/me" />
            }
        />
    );
};
