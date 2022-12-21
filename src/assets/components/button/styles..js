import styled,{  css  } from "styled-components";
/*Importando nosso framework*/

export const ButtonContainer = styled.button ` 
background: #565656;
border-radius:22px;
position:relative;

color:#FFFF
padding:2px 12px;
min-width:120px;
width:100%;


${({variant})=> variant !== "primary" && css`
  min-width:167px;
  height:33px;
  background: #E41050;
  
  &::after {
    content:'',
    position:absolute;
    border:1px solid #e41050;
    top:-5px;
    left:-6px;
    width:calc(100% + 10px);
    height: calc(100% + 10px)
    border-radius: 22px;
  }`}
`
/*Criamos um elemento but*/
/*No código a cima , vamos receber uma propriedade (variant), caso 
 ela seja diferente  de ela mesma(então no caso ela irá ser primary o primeiro elemento), eu quero que o CSS seja assim,ex:
 min-width:167px*/


 /*No código a cima , o '&::after' serve para criar outro elemento , fora do elemento anterior*/


 /*'width:calc(100% - 10px);' sim!, podemos fazer contas para especificar um valor.*/