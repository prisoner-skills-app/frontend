import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

//Components
import { Segment } from 'semantic-ui-react';

//Custom Components
import { OnboardingForm, Header } from '../../components';

//Styled Components
import { ColumnContainer } from '../../globals/components';
import { small } from '../../globals/styles';

//State
import { useStateValue } from '../../state';

const FormContainer = styled(Segment)`
    width: 800px;
    padding: ${small};
`;

const Onboarding = ({ history }) => {
    return (
        <ColumnContainer align="stretch">
            <Header
                justify="center"
                title={`Welcome to Regain! \n Let's finish setup!`}
                size="3em"
            />
            <ColumnContainer align="center">
                <FormContainer basic>
                    <OnboardingForm />
                </FormContainer>
            </ColumnContainer>
        </ColumnContainer>
    );
};

export default Onboarding;
