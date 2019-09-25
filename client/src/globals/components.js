import styled from 'styled-components';

export const flexBoxMixin = (direction, justify, align, wrap) => {
    return `
    display: flex;
    flex-direction: ${direction || 'row'};
    justify-content: ${justify || 'flex-start'};
    align-items: ${align || 'flex-start'};
    flex-wrap: ${wrap || 'wrap'};
    `;
};

export const ColumnContainer = styled.div.attrs(props => ({
    justify: props.justify || 'flex-start',
    align: props.align || 'stretch',
    padding: props.padding || 0,
}))`
    padding: ${props => props.padding};
    ${props => flexBoxMixin('column', props.justify, props.align)};
`;

export const RowContainer = styled.div.attrs(props => ({
    justify: props.justify || 'flex-start',
    align: props.align || 'flex-start',
}))`
    ${props => flexBoxMixin('row', props.justify, props.align)}
`;
