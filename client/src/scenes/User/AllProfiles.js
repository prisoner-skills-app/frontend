import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../hooks';
import axios from 'axios';
import styled from 'styled-components';
import { small } from '../../globals/styles.js';

//State
import { useStateValue } from '../../state';

//Components
import { ColumnContainer, RowContainer } from '../../globals/components';
import { Card, Button, Message } from 'semantic-ui-react';
import { Route, Link } from 'react-router-dom';

//Dummy Components
const Header = () => <h1>Candidate Profiles</h1>;
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
    const [{ user, candidates }, dispatch] = useStateValue();

    useEffect(() => {
        setIsLoading(true);
        //let prisonId = location.pathname;
        //let url = `api/prions/${prisonId}`;

        let url = `https://lsbw-liberated-skills.herokuapp.com/api/centers/${user.id}`;
        axios
            .get(url)
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('did not fetch all prisons');
                }
                console.log(res);
                dispatch({
                    type: 'set_user_candidates',
                    payload: res.data.persons,
                });
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            });
    }, []);

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
            <Header />
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
                        candidates.map((candidate, index) => {
                            return (
                                <Link
                                    to={{
                                        pathname: '/me/edit-profile',
                                        state: { candidate: true },
                                    }}
                                >
                                    <Card
                                        header={candidate.name}
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
        </>
    );
};

export default AllProfiles;
