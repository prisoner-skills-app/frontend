import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { small } from '../../globals/styles.js';
import { useStateValue } from '../../state';

//Components
import { ColumnContainer, RowContainer } from '../../globals/components';
import { Card, Grid, Responsive, Tab, Button } from 'semantic-ui-react';
import { Route, Link } from 'react-router-dom';
import { EditProfileForm, CandidateCard, LargeCard } from '../../components';

const Preview = ({ preview }) => {
    const panes = [
        {
            menuItem: 'Card',
            render: () => (
                <Tab.Pane as="div" attached={false}>
                    <CandidateCard
                        {...preview}
                        actions={
                            <Button
                                color="green"
                                content={`View more about ${preview &&
                                    preview.name}`}
                            />
                        }
                    />
                </Tab.Pane>
            ),
        },
        {
            menuItem: 'Full Profile',
            render: () => (
                <Tab.Pane as="div" attached={false}>
                    <LargeCard
                        {...preview}
                        noButton={true}
                        actions={
                            <Button
                                color="green"
                                content={`View more about ${preview.name}`}
                            />
                        }
                    />
                </Tab.Pane>
            ),
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
    const [{ preview }, dispatch] = useStateValue();

    return (
        <ColumnContainer padding="2em">
            <Grid columns={2} style={{ width: '100%' }}>
                <Grid.Column width={8}>
                    <EditProfileForm {...location.state.candidate} />
                </Grid.Column>
                <Responsive
                    as={Grid.Column}
                    width={8}
                    minWidth={Responsive.onlyComputer.minWidth}
                >
                    <Preview preview={preview} />
                </Responsive>
            </Grid>
        </ColumnContainer>
    );
};

export default CreateProfile;
