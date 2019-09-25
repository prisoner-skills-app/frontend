import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

//Components
import { Button } from 'semantic-ui-react';

//Styling
import { medium } from '../globals/styles';

//Styled Components
const Banner = styled.header`
    background-image: url('http://www.bara-art.com/wp-content/uploads/2016/07/building_roof.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: 768px) {
        background-position: 0% 30%;
    }

    @media (max-width: 500px) {
        background-position: 0% 45%;
    }

    overflow-x: hidden;
    font-size: 2em;
    color: white;
    max-height: 200px;
`;

const Title = styled.h1`
    font-size: ${medium};
`;

const Header = ({ title, titlePosition, subtitle, backButton, history }) => (
    <Banner>
        {backButton && (
            <Button icon="caret square left" onClick={() => history.goBack()} />
        )}
        {title && <Title>{title}</Title>}
        {subtitle}
        <p>Prisoner Skills believes in every prisoner’s future.</p>
        <p>Thank you for helping</p>
    </Banner>
);
export default withRouter(Header);
