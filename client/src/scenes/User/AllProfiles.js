import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { small } from '../../globals/styles.js';

//Components
import { ColumnContainer, RowContainer } from '../../globals/components';
import { Card, Button } from 'semantic-ui-react';
import { Route, Link } from 'react-router-dom';

//Dummy Components
const Header = () => <h1>Header</h1>;
const Prisoners = () => <h1>Prisoners</h1>;
const CandidateProfile = () => <h1>Candidate Profile Route</h1>;

//Styled Components
const CandidatesContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    padding: ${small};
    width: ${props => props.size || '100%'};
`;

const AllProfiles = ({
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
        <ColumnContainer>
            <Header title={prisonName} />
            <Button
                as={Link}
                to="/me/create-profile"
                color="blue"
                content="Create Profile"
            />
            <RowContainer>
                <CandidatesContainer>
                    {isLoading ? (
                        <h1>Loading</h1>
                    ) : (
                        prison.map((candidate, index) => {
                            return (
                                <Link
                                    to={{
                                        pathname: '/me/edit-profile',
                                        state: { candidate: true },
                                    }}
                                >
                                    <Card
                                        header={`${candidate.first_name} ${candidate.last_name}`}
                                        description={candidate.description}
                                        meta={candidate.skills}
                                    />
                                </Link>
                            );
                        })
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

export default AllProfiles;
