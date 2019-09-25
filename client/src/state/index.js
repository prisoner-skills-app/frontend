import React, { useReducer, createContext, useContext } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

export const ComponentWithState = ({ component: Component, ...props }) => {
    const [state, dispatch] = useStateValue();
    return <Component state={state} dispatch={dispatch} {...props} />;
};

export const withState = WrappedComponent => {
    return props => {
        const [state, dispatch] = useStateValue();
        return (
            <WrappedComponent state={state} dispatch={dispatch} {...props} />
        );
    };
};
