import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Components
import { ColumnContainer } from '../../globals/components';

//Dummy Components
const Header = () => <h1>Header</h1>;
const PrisonTable = () => <h1>Prison Table</h1>;

const AllPrisons = () => {
    const [prisons, setPrisons] = useState([]);

    useEffect(() => {
        let url = '';

        axios
            .get(url)
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('did not fetch all prisons');
                }
                console.log(res);
                setPrisons(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <ColumnContainer>
            <Header />
            <PrisonTable />
        </ColumnContainer>
    );
};

export default AllPrisons;
