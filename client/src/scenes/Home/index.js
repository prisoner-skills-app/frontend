import React from 'react';

//Components
import { ColumnContainer } from '../../globals/components';
import { Header } from '../../components';

const SearchBar = () => <p>Search Bar</p>;
const DropDown = () => <p>Drop Down</p>;

const Home = () => {
    return (
        <ColumnContainer>
            <Header
                title="All Candidates"
                searchBar={<SearchBar />}
                dropDown={<DropDown />}
            />
        </ColumnContainer>
    );
};

export default Home;
