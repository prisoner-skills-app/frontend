import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { small, medium } from '../../../globals/styles.js';

//Components
import { ColumnContainer, RowContainer } from '../../../globals/components';
import { Button } from 'semantic-ui-react';
import { Route, Link } from 'react-router-dom';
import { Header, CandidateCard, WarningModal } from '../../../components';

//Dummy Components
const Prisoners = () => <h1>Prisoners</h1>;
const CandidateProfile = () => <h1>Candidate Profile Route</h1>;

//Styled Components
const CandidatesContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    padding: ${medium};
    width: ${props => props.size || '100%'};
`;

const PrisonProfile = ({
    prisonName = 'Corrections',
    location,
    history,
    match,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [prison, setPrison] = useState([]);
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        //let prisonId = location.pathname;
        //let url = `api/prions/${prisonId}`;
        let url = `https://lsbw-liberated-skills.herokuapp.com/api/centers/${match.params.prison}`;

        axios
            .get(url)
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('did not fetch all prisons');
                }
                console.log(res);
                setPrison(res.data.center);
                setCandidates(res.data.persons);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            });
    }, []);

    return (
        <ColumnContainer align="stretch">
            {isLoading ? (
                <h1>Loading</h1>
            ) : (
                <>
                    <Header title={prison.name} backButton />
                    <ColumnContainer padding="2em">
                        <h2>Candidates</h2>

                        <RowContainer>
                            <CandidatesContainer
                                size={
                                    location.pathname.indexOf('/', 3) !== -1
                                        ? '50%'
                                        : '100%'
                                }
                            >
                                <RowContainer justify="space-between">
                                    {candidates.map((candidate, index) => {
                                        return (
                                            <Link to={`${match.url}/${index}`}>
                                                <CandidateCard
                                                    key={
                                                        candidate.name +
                                                        candidate.id
                                                    }
                                                    name={candidate.name}
                                                    description={
                                                        candidate.description ||
                                                        ''
                                                    }
                                                    skills={candidate.skills}
                                                    actions={
                                                        <>
                                                            <Button
                                                                content={`View more about ${candidate.name}`}
                                                                color="green"
                                                            />
                                                            <WarningModal />
                                                        </>
                                                    }
                                                />
                                            </Link>
                                        );
                                    })}
                                </RowContainer>
                            </CandidatesContainer>
                            <Route
                                path="/:prison/:candidate"
                                component={CandidateProfile}
                            />
                        </RowContainer>
                    </ColumnContainer>
                </>
            )}
        </ColumnContainer>
    );
};

export default PrisonProfile;
