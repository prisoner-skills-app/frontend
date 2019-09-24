import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Components
import { ColumnContainer } from '../../../globals/components';

//Dummy Components
const Header = () => <h1>Header</h1>;
const Prisoners = () => <h1>Prisoners</h1>;

const PrisonProfile = ({
    prisonName = 'Corrections',
    location,
    history,
    match,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [prison, setPrison] = useState({});

    useEffect(() => {
        let prisonId = location.pathname;
        let url = `api/prions/${prisonId}`;

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
            <Prisoners />
        </ColumnContainer>
    );
};

export default PrisonProfile;
