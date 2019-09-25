import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { small } from '../../globals/styles.js';

//Components
import { ColumnContainer, RowContainer } from '../../globals/components';
import { Card } from 'semantic-ui-react';
import { Route, Link } from 'react-router-dom';

//Dummy Components
const Header = () => <h1>Header</h1>;
const CreateForm = () => <h1>Create Form</h1>;
const Preview = () => <h1>Preview Form</h1>;

//Styled Components

const CreateProfile = ({
    prisonName = 'Corrections',
    location,
    history,
    match,
}) => {
    return (
        <ColumnContainer>
            <Header title={prisonName} />
            <RowContainer>
                <CreateForm />
                <Preview />
            </RowContainer>
        </ColumnContainer>
    );
};

export default CreateProfile;
