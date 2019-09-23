import React from 'react';
import 'semantic-ui-css/semantic.min.css';

//Components
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import { SignUp } from '../../components';

//Custom Components

//State

//Styled Components CSS

const App = () => {
    return (
        
        <div>
            <Header as="h1" content="Prisoner Skills" />
            <SignUp />
        </div>
    );
};

export default App;
