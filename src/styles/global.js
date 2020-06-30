import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@400;500;600;700&display=swap');

    *{
        margin: 0;
        border: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Roboto Condensed', sans-serif;
    }

    html, body, #root{
        width: 100%;
    }

    button, input{
        outline: none;
    }

    :root {
        --primary: #36393f;
        --secondary: #2f3136;
      }
`