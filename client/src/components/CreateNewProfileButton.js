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
    height: 300px;
    width: 290px;
    margin-right: ${large};
    margin-bottom: 10px;
    margin-top: 14px;
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
