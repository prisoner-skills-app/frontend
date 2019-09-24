import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

//Components
import { Grid, Divider, Segment } from 'semantic-ui-react';

//Custom Components
import { LogIn, SignUp } from '../../components';

//Styled Components
import { ColumnContainer } from '../../globals/components';
import { small } from '../../globals/styles';
import { flexBoxMixin } from '../../globals/components';

const FormContainer = styled(Segment)`
    width: 800px;
    padding: ${small};
`;

//Dummy
const Header = () => <h1>Header</h1>;

const LoginSignup = () => {
    return (
        <ColumnContainer align="center">
            <Header />
            <FormContainer basic>
                <Grid columns={2} relaxed="very" stackable>
                    <Grid.Column>
                        <LogIn />
                    </Grid.Column>
                    <Grid.Column>
                        <SignUp />
                    </Grid.Column>
                </Grid>

                <Divider vertical>Or</Divider>
            </FormContainer>
        </ColumnContainer>
    );
};

export default LoginSignup;
