import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { small } from '../../globals/styles.js';

//Components
import { ColumnContainer, RowContainer } from '../../globals/components';
import { Card, Grid, Responsive, Tab } from 'semantic-ui-react';
import { Route, Link } from 'react-router-dom';

//Dummy Components
const Header = () => <h1>Header</h1>;
const CreateForm = () => <h1>Create Form</h1>;
const Preview = () => {
    const panes = [
        {
            menuItem: 'Card',
            render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>,
        },
        {
            menuItem: 'Full Profile',
            render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
        },
    ];

    return (
        <>
            <h1>How Profile Will Look</h1>
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </>
    );
};

//Styled Components

const CreateProfile = ({
    prisonName = 'Corrections',
    location,
    history,
    match,
}) => {
    return (
        <Grid columns={2} style={{ width: '100%' }}>
            <Grid.Column width={8}>
                <CreateForm />
            </Grid.Column>
            <Responsive
                as={Grid.Column}
                width={8}
                minWidth={Responsive.onlyComputer.minWidth}
            >
                <Preview />
            </Responsive>
        </Grid>
    );
};

export default CreateProfile;
