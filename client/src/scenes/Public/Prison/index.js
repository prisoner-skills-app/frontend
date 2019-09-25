import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { small, medium } from '../../../globals/styles.js';

//Components
import { ColumnContainer, RowContainer } from '../../../globals/components';
import { Card } from 'semantic-ui-react';
import { Route, Link } from 'react-router-dom';
import { Header } from '../../../components';

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

    useEffect(() => {
        setIsLoading(true);
        //let prisonId = location.pathname;
        //let url = `api/prions/${prisonId}`;
        let url = 'https://my.api.mockaroo.com/users.json?key=ee167170';

        axios
            .get(url)
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('did not fetch all prisons');
                }
                console.log(res);
                setPrison(res.data);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            });
    }, []);

    return (
        <ColumnContainer align="stretch">
            <Header title="Hunstville Corrections" />
            <RowContainer>
                <CandidatesContainer
                    size={
                        location.pathname.indexOf('/', 3) !== -1
                            ? '50%'
                            : '100%'
                    }
                >
                    {isLoading ? (
                        <h1>Loading</h1>
                    ) : (
                        <>
                            <h2>Candidates</h2>
                            <RowContainer justify="space-between">
                                {prison.map((candidate, index) => {
                                    return (
                                        <Link to={`${match.url}/${index}`}>
                                            <Card
                                                header={`${candidate.first_name} ${candidate.last_name}`}
                                                description={
                                                    candidate.description
                                                }
                                                meta={candidate.skills}
                                            />
                                        </Link>
                                    );
                                })}
                            </RowContainer>
                        </>
                    )}
                </CandidatesContainer>
                <Route
                    path="/:prison/:candidate"
                    component={CandidateProfile}
                />
            </RowContainer>
        </ColumnContainer>
    );
};

export default PrisonProfile;
