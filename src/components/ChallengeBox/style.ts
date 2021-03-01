import styled from 'styled-components';

export const ChallengeBoxContainer = styled.div`
    height: 100%;

    background: var(--white);
    border-radius: 5px;
    box-shadow: 0 0 60 rgba(0, 0, 0, 0.05);
    padding: 1.5rem 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
`;

export const challengeNotActive = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const challengeNotActiveStrong = styled.strong`
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
`;

export const ChallengeNotActiveP = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;
`;

export const ChallengeNotActiveImg = styled.img`
    margin-bottom: 1rem;
`;

export const ChallengeActive = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const ChallengeActiveHeader = styled.header`
    color: var(--blue);
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid var(--gray-line);
`;

export const ChallengeActiveMain = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ChallengeActiveMainStrong = styled.strong`
    font-weight: 600;
    font-size: 2rem;
    color: var(--title);
    margin: 1.5rem 0 1rem;
`;

export const ChallengeActiveMainP = styled.p`
    line-height: 1.5;
`;

export const ChallengeActiveFooter = styled.footer`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
`;

export const ChallengeActiveFooterButton = styled.button`
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
`;

export const ChallengeFailedButton = styled.button`
    background: var(--red);
`;

export const ChallengeSucceededButton = styled.button`{
    background: var(--green);
`;

// export const hallengeActive footer button:hover {
//     filter: brightness(0.9);
// }