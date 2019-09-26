import React, { useState } from 'react';
//Components
import { ColumnContainer } from '../../globals/components';
import { Header } from '../../components';
import styled from 'styled-components';
import { Form, Icon, Input } from 'semantic-ui-react';

// const MySearch = styled.div`
//     input {
//         border: 1px solid white;
//         border-radius: 5px 0px 0px 5px;
//         color: white;
//         background-color: transparent;
//         height: 45px;
//         width: 800px;
//         margin-left: 50px;
//         border-color: white;
//         font-size: 1.2rem;
//         border-right: none;
//     }
//     button {
//         height: 45px;
//         width: 200px;
//         background-color: white;
//         border: 1px solid white;
//         border-left: none;
//         border-radius: 0px 5px 5px 0px;
//     }
// `;

const MyDrop = styled.div`
    border: 1px solid white;
    border-radius: 5px;

    select {
        margin-left: 50px;
        height: 45px;
        width: 220px;
        border-radius: 5px;
    }
`;

const SearchBar = () => {
    const [skill, setSkill] = useState('');

    return (
        <Form>
            <Form.Field>
                <Input
                    id="search"
                    value={skill}
                    placeholder="Search Skills "
                    onChange={event => setSkill(event.target.value)}
                    action={{
                        color: '#ffffff',
                        labelPosition: 'right',
                        icon: 'search',
                        content: 'Search',
                    }}
                />
            </Form.Field>
        </Form>
    );
};

const DropDown = () => (
    <MyDrop>
        <select>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
        </select>
    </MyDrop>
);

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
