import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');
    *{
    box-sizing:border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    }

    body{
        background: #F7F7F9;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        line-height: 24px; 
    }
 `;
