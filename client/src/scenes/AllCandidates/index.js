import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { medium, large } from '../../globals/styles';
import { useStateValue } from '../../state';

//Components
import { Card, Button } from 'semantic-ui-react';
import { ColumnContainer } from '../../globals/components';
import { Link } from 'react-router-dom';

//Custom Components
import { Header, CandidateCard } from '../../components';

//Styled Components
const CandidatesContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    padding: ${medium};

    .ui.card:first-child {
        margin-top: 14px;
    }
`;

const AllCandidates = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [candidates, setCandidates] = useState([]);
    const [{ search, state }, dispatch] = useStateValue();

    useEffect(() => {
        setIsLoading(true);
        let url = 'https://lsbw-liberated-skills.herokuapp.com/api/candidates';

        axios
            .get(url)
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('Call to candidates failed');
                }
                console.log(res);
                setCandidates(res.data);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            });
    }, []);

    return (
        <ColumnContainer align="stretch">
            <Header title="All Candidates" />
            <CandidatesContainer>
                {isLoading ? (
                    <h1>Loading</h1>
                ) : (
                    candidates.map(candidate => {
                        return (
                            <CandidateCard
                                key={candidate.name + candidate.id}
                                name={candidate.name}
                                description={candidate.description || ''}
                                skills={candidate.skills}
                                actions={
                                    <Button
                                        as={Link}
                                        to={{
                                            pathname: `/${candidate.centerId}/${candidate.id}`,
                                            state: { candidate },
                                        }}
                                        content={`View more about ${candidate.name}`}
                                        color="green"
                                    />
                                }
                            />
                        );
                    })
                )}
            </CandidatesContainer>
        </ColumnContainer>
    );
};

export default AllCandidates;
