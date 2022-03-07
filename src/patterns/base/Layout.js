import { createGlobalStyle } from 'styled-components';
import Meta from '../../infra/Meta';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
    return (
        <>
            <Meta />
            <GlobalStyle />
            <Header/>
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
};

const GlobalStyle = createGlobalStyle`
    :root {
        /* paleta de cores */
        --color-primary: #131313;
        --color-secondary: #F6CF57;
        --color-tertiary: #e92929;
        --color-text: #ffffff;

        font-size: 62.5%;   
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        position: relative;
        background-color: var(--color-primary);
        font-family: 'Roboto', sans-serif;
        text-align: center;
        padding: 10px 10px 25px 10px;
        max-width: 1500px;
        min-height: 100vh;
        margin: auto;
    }

    h1 {
        color: var(--color-text);
        font-size: 3.6rem;
        line-height: 121%;
        margin: 0 5px;
    }

    h2 {
        color: var(--color-text);
        font-size: 2.8rem;
        line-height: 121%;
        margin-bottom: 10px;
    }

    p {
        color: var(--color-text);
        font-size: 1.5rem;
        line-height: 121%;
    }

    span {
        color: var(--color-text);
        font-size: 1rem;
        margin-bottom: 5px;
    }

    @media (min-width:480px) {
        :root {
            font-size: 70%;
        }

    }

    @media (min-width:600px) {
        :root {
            font-size: 80%;
        }
    }

    @media (min-width:801px) {
        :root {
            font-size: 90%;
        }

        span {
            font-size: .9rem;
        }

        p {
            font-size: 1.2rem;
        }
    }

    @media (min-width:1021px) {
        :root {
            font-size: 100%;
        }
    }

    @media (min-width:2200px) {
        :root {
            font-size: 110%;
        }
    }
`;