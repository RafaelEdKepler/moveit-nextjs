import {createGlobalStyle} from 'styled-components';


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --white: #fff;
        --background: #F2F3F5;
        --gray-line: #DCDDE0;
        --text: #666666;
        --text-highlight: #B3B9FF;
        --title: #2E384D;
        --red: #E83F5B;
        --green: #4CD62B;
        --blue: #5965E0;
        --blue-dark: #4953B8;
        --blue-twitter: #2AA9E0;
        --blue-text: #B2B9FF;
    }

    @media(max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media(max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }

    body {
        background: ${props => props.theme.colors.primary};
        color: var(--text);
    }

    body, input, textarea, button {
        font: 400 1rem "Inter", sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    .container {
        height: 100vh;
        max-width: 992px;
        margin: 0 auto;
        padding: 0rem 2.5rem 0rem 2rem;

        display: flex;
        flex-direction: column;
    }
`