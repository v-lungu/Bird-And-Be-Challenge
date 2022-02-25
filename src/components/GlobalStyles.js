import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}
html{
    @media (max-width: 1700px){
        font-size: 75%;
    }  
}
body{
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
}
button{
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    width: 30rem;
    padding: 1rem 8rem;
    margin: 2rem 3rem;
    margin-left: 0rem;
    background-color: rgb(83, 48, 112);
    border-color: rgb(83, 48, 112);
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    align-self: flex-start;
    &:hover{
        border-color: rgb(83, 48, 112);
        background-color: white;
        color: rgb(83, 48, 112);
    }
} 
h1{
        font-weight: bold;
        font-size: 2rem;
        color: #331D43;
        padding-bottom: 1rem;
        padding-top: 1rem;
    }
h3{
        font-weight: bold;
        font-size: 1.5rem;
        padding: 1rem 0rem;
    }
span{
        font-weight: lighter;
        font-size: 1.3rem;
    }
ul, li {margin-left: 1rem; padding-left: 0;}
img {
        width: 7rem;
        height: 7rem;
        object-fit: scale-down;
}
`;

export default GlobalStyle;
