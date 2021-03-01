import styled from 'styled-components';

export const ExpBar = styled.header`
    display: flex;
    align-items: center;

    span {
        font-size: 1rem;
        color: ${props => props.theme.colors.text};
    }

    & > div {
        flex: 1;
        height: 4px;
        border-radius: 4px;
        background: var(--grey-line);
        margin: 0 1.5rem;
        position: relative;
    }

    & > div > div {
        height: 4px;
        border-radius: 4px;
        background: var(--green);
    }
`;

export const CurrentExperience = styled.span `
    position: absolute;
    top: 12px;
    transform: translateX(-50%);
`;