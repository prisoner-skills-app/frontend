import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './scenes/App';
import * as serviceWorker from './serviceWorker';

import { StateProvider } from './state';

const reducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const initialState = {};

ReactDOM.render(
    <StateProvider initialState={initialState} reducer={reducer}>
        <App />
    </StateProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
