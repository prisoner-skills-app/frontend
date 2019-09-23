import React, { useState, useEffect } from './react';
import axios from 'axios';

//Components
const Header = () => <h1>Header</h1>;

const AllCandidates = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        let url = 'https://my.api.mockaroo.com/users.json?key=ee167170';

        axios.get(url).then(res => console.log(res));
    }, []);

    return <h1>All Candidates</h1>;
};

export default AllCandidates;
