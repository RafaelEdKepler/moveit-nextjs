import styled from 'styled-components';

export const ChallengeBoxContainer = styled.div`
    height: 100%;

    background: ${props => props.theme.colors.secundary};
    border-radius: 5px;
    box-shadow: 0 0 60 rgba(0, 0, 0, 0.05);
    padding: 1.5rem 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
`;

export const ChallengeNotActive = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.4;
        color: ${props => props.theme.colors.text}
    }

    p {
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 1.4;
        max-width: 70%;
        margin-top: 3rem;
        color: ${props => props.theme.colors.text}
    }

    img {
        margin-bottom: 1rem;
    }
`;

export const ChallengeActive = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;

    header {
        color: var(--blue);
        font-weight: 600;25
        padding: 0 2rem 1.5rem;
        border-bottom: 1px solid var(--gray-line);
        color: ${props => props.theme.colors.text}

    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: ${props => props.theme.colors.text}

    }

    strong {
        font-weight: 600;
        font-size: 2rem;
        color: var(--title);
        margin: 1.5rem 0 1rem;
        color: ${props => props.theme.colors.text}

    }

    p {
        line-height: 1.5;
        color: ${props => props.theme.colors.text}

    }

    footer {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        color: ${props => props.theme.colors.text}

        button {
            height: 3rem;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 0;
            border-radius: 5px;

            color: var(--white);
            font-size: 1rem;
            font-weight: 600;

            transition: filter 0.2s;
        }
    }
`;

export const ChallengeFailedButton = styled.button`
    background: var(--red);

    &:hover {
       filter: brightness(0.9);
    }
`;

export const ChallengeSucceededButton = styled.button`{
    background: var(--green);

    &:hover {
        filter: brightness(0.9);
     }
`;

// export const hallengeActive footer button:hover {
//     filter: brightness(0.9);
// }