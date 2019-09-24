import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { medium } from '../../../globals/styles.js';

//Components
import { ColumnContainer } from '../../../globals/components';
import { Card } from 'semantic-ui-react';

//Dummy Components
const Header = () => <h1>Header</h1>;
const Prisoners = () => <h1>Prisoners</h1>;

//Styled Components
const CandidatesContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    padding: ${medium};
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
            <CandidatesContainer>
                {isLoading ? (
                    <h1>Loading</h1>
                ) : (
                    prison.map(candidate => {
                        return (
                            <Card
                                header={`${candidate.first_name} ${candidate.last_name}`}
                                description={candidate.description}
                                meta={candidate.skills}
                            />
                        );
                    })
                )}
            </CandidatesContainer>
        </ColumnContainer>
    );
};

export default PrisonProfile;
