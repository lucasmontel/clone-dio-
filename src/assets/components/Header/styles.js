/*Criamos os componentes no js*/

import styled from "styled-components";

export const Container = styled.div`
width:100%;
max-width:80%;
heigth:47px;
display:flex;
justify-content:space between;
align-items:center;
margin:0 auto;
`

/*Margem 0 para que ele cole no topo e fique sem bordas*/

/*No nosso justify content usamos o space between para criar um espaçamento entre as linhas(se alinhando) */



export const Row = styled.div `
display:flex;
flex-direction:row;
align-items:center;
`
/*Row serve para criar as nossas linhas dentro do nosso componente container (O Container será o nosso header/cabeçalho )  */

/*O row serve para poder alterar a direção de elementos flex */


export const Column = styled.div `
display:flex;
flex-direction:row;
align-items:center;
`

export const Wrapper = styled.div`
background-color:#151515;
width:100%;
height:47px;
display:flex;
justify-content:center;
alingn-items:center;
`
/*Wapper é onde ficará todo o seu conteudo */

/*Justify para que todos se organizem se baseando no eixo principal e alingn-items que faz conjunto com o justify */

export const Menu = styled.a
`
font-family:'Opens Sans';
font-style:normal;
fonte-size:12px;
line-height:25px;
color:#FFFFFF;
margin-right:12px;
text-decoration:none;
`

/*O text-decoration serve para tirar as animações do nosso link*/


export const MenuEsquerdo = styled.a`
font-family:'Opens Sans';
font-style:normal;
fonte-size:12px;
line-height:25px;
color:#FFFFFF;
margin-right:12px;
text-decoration:none;
`

export const ImagemUsuario = styled.img`
width:32px;
height:32px;
border-radius:22px;
border:2px solid #FFFFFF;


`
/*border no CSS serve para fazer um contorno em algum elemento , fazendo um contorno nele com a textura e por ultimo a cor*/

export const Input = styled.Input`
background:transparent;
flex:1;
border:0;
color:#FFFFFF;
`
/*Criamos todos os elementos em uma pasta para depois poder chama-los de forma organizada   */

/*color é a cor da fonte*/

/*Border o efeito*/

/*flex para que ele pegue 100% do conteudo*/