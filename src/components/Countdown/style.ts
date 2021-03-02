import styled from 'styled-components';

export const CountdownContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color: ${props => props.theme.colors.text};


    & > div {
        flex: 1;

        display: flex;
        align-items: center;
        justify-content: space-evenly;

        background: ${props => props.theme.colors.backgroundLight};
        box-shadow: ${props => props.theme.boxShadow};
        border-radius: 5px;
        font-size: 8.5rem;
        text-align: center;
    }

    & > div span {
        flex: 1;
        color: ${props => props.theme.colors.title};
    }

    & > div span:first-child {
        border-right: 1px solid ${props => props.theme.colors.background};
    }

    & > div span:last-child {
        border-right: 1px solid ${props => props.theme.colors.background};
    }

    & > span {
        font-size: 6.25rem;
        margin: 0 0.5rem;
    }
`;

export const CountdownButton = styled.button`
    width: 100%;
    height: 5rem;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 5px;
    background: ${props => props.theme.colors.blue};;
    color: var(--white);
    font-size: 1.25rem;
    font-weight: 600;
    transition: background-color 0.2s;


    &:not([disabled]):hover {
        background: ${props => props.theme.colors.blueDark};;
    }

    &:disabled {
        background: ${props => props.theme.colors.backgroundLight};
        border-bottom: 4px solid ${props => props.theme.colors.green};
        cursor: not-allowed;
      }

    &:focus {
        outline: 0;
    }
`;

export const CountdownButtonActive = styled.button`
    width: 100%;
    height: 5rem;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 5px;
    background: var(--blue);
    color: var(--white);
    font-size: 1.25rem;
    font-weight: 600;
    transition: background-color 0.2s;

    &:focus {
        outline: 0;
    }

    background: var(--white);
    color: var(--title);


    &:hover {
        background: var(--red);
        color: var(--white);
    }

    &:disabled {
        background: var(--white);
        color: var(--text);
        cursor: not-allowed;

        border-bottom: 0.25rem solid var(--green);
    }

    &:disabled img {
        margin-left: 0.5rem;
    }
`;