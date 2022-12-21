import React from "react";
import { ButtonContainer } from "./styles.";

const Button = ({title,variant="primary",onClick}) => {
    return (
       <ButtonContainer variant={variant} onClick={onClick}>
          {title}
       </ButtonContainer>
    )
}

export { Button }

/*Aqui recebemos no import nosso botão, criamos uma const botão que recebe ele ser um botão ou não (com sua variante de botão) recebe a ação de clique com o seu title*/