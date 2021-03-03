import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-image: linear-gradient(to bottom, var(--blue-dark), var(--blue));
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
`;

export const LeftSide = styled.div`
    width: 100%;
    height: 100%;
`;

export const RightSide = styled.div`
    div:first-child {
        margin: 10rem 0 0 8rem;
    }

    div:last-child {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    strong {
        color: var(--white);
        font-size: 2rem;
        font-weight: 600;
        margin-top: 5rem;
        margin-left: 6rem;
    }
`;

export const GitInput = styled.div`
    flex-direction: row !important;
    margin-top: 1rem;
    margin-left: 6rem;

    input {
        width: 20rem;
        height: 3rem;
        margin-right: 0;
        border-radius: 2px;
        border: none;
        background-image:  linear-gradient(to right, var(--blue-dark), var(--blue));
        color: var(--blue-text);
        padding-left: 1.5rem;
    }

    input::-moz-placeholder {
        color: var(--blue-text);
    }

    input::-webkit-input-placeholder {
        color: var(--blue-text);
    }

    input::-ms-input-placeholder {
        color: orange;
        font: 12px verdana, arial, sans-serif;
    }

    button, button img {
        width: 3rem;
        height: 3rem;
        background: transparent;
        border: 0;
        font-size: 0px;
    }

    button img {
        margin: 0;
    }
`;

export const GitImage = styled.div`
    margin-left: 6rem;
    margin-top: 1rem;


    img {
        width: 20rem;
    }
`;
