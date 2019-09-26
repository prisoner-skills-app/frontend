import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../hooks';
import axios from 'axios';
import styled from 'styled-components';
import { large } from '../../globals/styles.js';

//State
import { useStateValue } from '../../state';

//Components
import { ColumnContainer, RowContainer } from '../../globals/components';
import { Card, Button, Message } from 'semantic-ui-react';
import { Route, Link } from 'react-router-dom';
import {
    CreateNewProfileButton,
    CandidateCard,
    WarningModal,
} from '../../components';

//Dummy Components
const CandidateProfile = () => <h1>Candidate Profile Route</h1>;

//Styled Components
const CandidatesContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    width: ${props => props.size || '100%'};
`;

const AllProfiles = ({
    prisonName = 'Corrections',
    location,
    history,
    match,
}) => {
    const [{ user, candidates }, dispatch] = useStateValue();

    return (
        <>
            {candidates && candidates.length == 0 && (
                <Message
                    compact
                    positive
                    size="small"
                    icon="inbox"
                    content="Fantastic! Now create your first candidate profile!"
                    onDismiss={() => alert('dismissed')}
                />
            )}

            <RowContainer padding={large}>
                <h1>Candidate Profiles</h1>
                <CandidatesContainer>
                    <CreateNewProfileButton />
                    {candidates &&
                        candidates.map((candidate, index) => {
                            return (
                                <Link
                                    to={{
                                        pathname: '/me/edit-profile',
                                        state: { candidate: true },
                                    }}
                                >
                                    <CandidateCard
                                        key={candidate.name + candidate.id}
                                        name={candidate.name}
                                        description={
                                            candidate.description || ''
                                        }
                                        skills={candidate.skills}
                                        actions={
                                            <>
                                                <Button
                                                    as={Link}
                                                    to={{
                                                        pathname: `/edit-profile`,
                                                        state: { candidate },
                                                    }}
                                                    content={`Edit`}
                                                    basic
                                                    color="green"
                                                />
                                                <WarningModal />
                                            </>
                                        }
                                    />
                                </Link>
                            );
                        })}
                </CandidatesContainer>
                <Route
                    path="/:prison/:candidate"
                    component={CandidateProfile}
                />
            </RowContainer>
        </>
    );
};

export default AllProfiles;
