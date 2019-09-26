import React from 'react';
import styled from 'styled-components';

import { flexBoxMixin } from '../globals/components';
import { large } from '../globals/styles';

import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Button = styled.div`
    border-radius: 3px;
    border: 1px solid lightgrey;
    ${flexBoxMixin('column', 'center', 'center')}
    padding: ${large}
    height: 250px;
    width: 200px;
    margin-right: ${large};
    h4{
        text-align: center;
    }
`;

const CreateNewProfileButton = () => {
    return (
        <Button as={Link} to="/me/create-profile">
            <Icon basic name="plus" />
            <h4>Create New Candidate</h4>
        </Button>
    );
};

export default CreateNewProfileButton;
