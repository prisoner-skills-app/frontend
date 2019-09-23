import React from 'react';
import 'semantic-ui-css/semantic.min.css';

//Components
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

//Custom Components

//State
import { useStateValue } from '../../state';

//Styled Components CSS

const App = () => {
    return (
        <div>
            <Header as="h1" content="Prisoner Skills" />
        </div>
    );
};

export default App;
