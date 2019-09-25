import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { medium, large } from '../../globals/styles';

//Components
import { Card } from 'semantic-ui-react';
import { ColumnContainer } from '../../globals/components';

//Custom Components
const Header = () => <h1>Header</h1>;

//Styled Components
const CandidatesContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    padding: ${medium};
`;

const AllCandidates = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        let url =
            'https://cors-anywhere.herokuapp.com/https://lsbw-liberated-skills.herokuapp.com/api/candidates';

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
        <ColumnContainer>
            <Header />
            <CandidatesContainer>
                {isLoading ? (
                    <h1>Loading</h1>
                ) : (
                    candidates.map(candidate => {
                        return (
                            <Card
                                header={candidate.name}
                                description={candidate.description || ''}
                                meta={candidate.skills}
                            />
                        );
                    })
                )}
            </CandidatesContainer>
        </ColumnContainer>
    );
};

export default AllCandidates;
