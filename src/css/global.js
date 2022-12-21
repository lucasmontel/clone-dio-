import { createGlobalStyle } from "styled-components";

/*Ela nada mais é do que  uma função que vai
 exportar de forma global estilos para nossa aplicação , porque o styled components costuma criar para elementos fechados   */



 export const GlobalStyle = createGlobalStyle`
 *{
    margin :0;
    padding:0;
 }

 body{
    background-color:#1E192C;
    color:#FFFFFF;
 }
 `

 /*Assim deveremos usar esse padrão de styled components em todas as nossas aplicações CSS para manter um  padrão CSS */

 