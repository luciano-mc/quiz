import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    :root {
        line-height: 1.5;
        font-weight: 400;

        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
        background-color: #242424;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    };
    
    * {
        box-sizing: border-box;
        font-family: 'Catamaran', 'Poppins', sans-serif;
    };

    html {
        height: 100%;
    };

    body {
        background-color: #242b3e;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    };

    a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
    };

    a:hover {
        color: #535bf2;
    };

    body {
        margin: 0;
        display: flex;
        place-items: center;
        min-width: 320px;
        min-height: 100vh;
        font-family: 'Catamaran', 'Poppins', sans-serif;
    };

    h1 {
        font-size: 3.2em;
        line-height: 1.1;
    };

    button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
    };

    button:hover {
        border-color: #646cff;
    };

    button:focus,
    button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
    };

    @media (prefers-color-scheme: light) {
    :root {
        color: #213547;
        background-color: #ffffff;
    };

    a:hover {
        color: #747bff;
    };

    button {
        background-color: #f9f9f9;
    };
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;

    .score {
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: 'Poppins';
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 50px;
        font-weight: 500;
        text-align: center;
        margin: 20px;
    }

    .start, .next {
        cursor: pointer;
        background: #e5812f;
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
        font-weight: 600;
        font-size: 14px;
    }

    .start {
        max-width: 200px;
    }
`