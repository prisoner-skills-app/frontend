import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Components
import { ColumnContainer } from '../../globals/components';
import { Header, Table, Dropdown } from '../../components';

const AllPrisons = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [prisons, setPrisons] = useState([]);

    useEffect(() => {
        let url = 'https://lsbw-liberated-skills.herokuapp.com/api/centers';

        axios
            .get(url)
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('did not fetch all prisons');
                }
                console.log(res);
                setPrisons(res.data);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            });
    }, []);

    return (
        <ColumnContainer align="stretch">
            <Header title="All Prisons" dropDown={<Dropdown />} />
            <ColumnContainer padding="2em">
                <Table prisons={prisons} />
            </ColumnContainer>
        </ColumnContainer>
    );
};

export default AllPrisons;
