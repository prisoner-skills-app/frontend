import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

//Components
import { Segment } from 'semantic-ui-react';

//Custom Components
import { OnboardingForm } from '../../components';

//Styled Components
import { ColumnContainer } from '../../globals/components';
import { small } from '../../globals/styles';

//State
import { useStateValue } from '../../state';

const FormContainer = styled(Segment)`
    width: 800px;
    padding: ${small};
`;

//Dummy
const Header = () => <h1>Onboarding</h1>;

const Onboarding = ({ history }) => {
    return (
        <ColumnContainer align="center">
            <Header />
            <FormContainer basic>
                <OnboardingForm />
            </FormContainer>
        </ColumnContainer>
    );
};

export default Onboarding;
