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
    input[type=number] {
  -moz-appearance:textfield;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}input:focus {
   outline:none;
}
::-webkit-input-placeholder { /* Edge */
  color: rgba(255,255,255,.4);
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: rgba(255,255,255,.4);
}

::placeholder {
  color: rgba(255,255,255,.4);
}
a{
  text-decoration:none
}

 `;
