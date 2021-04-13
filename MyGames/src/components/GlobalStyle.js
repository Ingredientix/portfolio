import { createGlobalStyle } from 'styled-components'
// font-family: 'Montserrat', sans-serif;

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;

        ::-webkit-scrollbar {
            width: 10px;
        }
        ::-webkit-scrollbar-track {
            background: #454545;
        }
        ::-webkit-scrollbar-thumb {
            background: #202020;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #555555
        }
    }
`

export default GlobalStyle