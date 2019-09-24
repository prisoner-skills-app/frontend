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

export const ColumnContainer = styled.div`
    ${flexBoxMixin('column')}
`;

export const RowContainer = styled.div`
    ${flexBoxMixin()}
`;
