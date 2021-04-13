import { createGlobalStyle } from 'styled-components';
// font-family: 'Inter', sans-serif;
// font-family: 'Lobster', cursive;

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
}
button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background-color: #23d997;
    }
}

h2{
    font-weight: lighter;
    font-size: 4rem;
    
}
h3{
    color: white;
}
h4{
    color: white;
    font-weight: bold;
    font-size: 2rem;
}
span{
    color: #23d997;
    font-weight: bold;
}
a{
    font-size: 1.1rem;
}
p{
    color: #ccc;
    padding: 3rem 0rem;
    font-size: 1.4rem;
    line-height: 150%;
}

`;

export default GlobalStyle;
