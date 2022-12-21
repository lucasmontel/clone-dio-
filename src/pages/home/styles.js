import styled from "styled-components";



export const Container = styled.main `
width:100%;
max-width:80%;
margin:0 auto; 
margin-top:120px;

display:flex;
flex-direction:row;
`


export const Title = styled.h1`
font-family:'Open-Sans';
font-style:normal;
font-weight:700;
font-size:32px;
width:320px;
margin-bottom:20px;
line-height:44px;
color:#FFFFFF;

`


/*Aqui decidimos que a fonte será Open Sans ,depois a textura, logo depois definimos a intensidade da font , tamanho , largura, espaçamento de cima pra baixo, espaçamento entre as linhas e a cor da fonte  */



export const TitlePink = styled.span`
color:#E41050;

`  


export const Paragrafo = styled.p`
font-family:'Open-Sans';
font-style:normal;
font-weight:400;
font-size:16px;
width:420px;
margin-bottom:20px;
line-height:22px;
color:#FFFFFF;


`
