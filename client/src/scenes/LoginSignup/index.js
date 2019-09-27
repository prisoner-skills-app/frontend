import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

//Components
import { Grid, Divider, Segment } from 'semantic-ui-react';

//Custom Components
import { LogIn, SignUp, Header } from '../../components';

//Styled Components
import { ColumnContainer } from '../../globals/components';
import { small } from '../../globals/styles';
import { flexBoxMixin } from '../../globals/components';

const FormContainer = styled(Segment)`
    width: 800px;
    padding: ${small};
`;

const LoginSignup = () => {
    return (
        <ColumnContainer>
            <Header
                justify="center"
                title={`Regain believes in every prisoner's future. \n Thank you for helping!`}
                size="3em"
            />
            <ColumnContainer align="center">
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
        </ColumnContainer>
    );
};

export default LoginSignup;
