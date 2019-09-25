import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

//Components
import { Icon } from 'semantic-ui-react';

//Styling
import { medium, large } from '../globals/styles';
import { flexBoxMixin, RowContainer } from '../globals/components';

//Styled Components
export const Banner = styled.header.attrs(props => ({
    direction: props.direction || 'row',
    justify: props.justify || 'space-between',
    align: props.align || 'center',
    size: props.size || '1.5em',
}))`
    background-image: url('https://i.stack.imgur.com/Ip1XY.png'),
        url('http://www.bara-art.com/wp-content/uploads/2016/07/building_roof.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: 768px) {
        background-position: 0% 30%;
    }

    @media (max-width: 500px) {
        background-position: 0% 45%;
        text-align: center;
        justify-content: center;
        align-items: center;
    }

    overflow-x: hidden;
    color: white;
    max-height: 200px;
    padding: ${props => props.size};

    ${props => flexBoxMixin(props.direction, props.justify, props.align)};
`;

const Title = styled.h1`
    font-size: ${props => props.size || large};
    margin-top: 0;
`;

const Header = ({
    title = 'Prisoner Skills',
    titlePosition,
    subtitle = '',
    backButton,
    history,
    direction,
    justify,
    align,
    size,
}) => (
    <Banner direction={direction} justify={justify} align={align} size={size}>
        <RowContainer align="center">
            {backButton && (
                <Icon
                    name="caret left"
                    onClick={() => history.goBack()}
                    style={{ marginRight: 10 }}
                />
            )}
            {title && (
                <Title size={size}>
                    {title.split('\n').map((i, key) => {
                        return (
                            <div key={key} style={{ textAlign: 'center' }}>
                                {i}
                            </div>
                        );
                    })}
                </Title>
            )}
        </RowContainer>
        {subtitle}
    </Banner>
);
export default withRouter(Header);
