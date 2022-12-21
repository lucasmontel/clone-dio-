/*Montamos no os componentes no jsx*/
import React from "react"; /*Sempre devemos importar nossa biblioteca*/
import { Button } from "../button"
import logo from "../../img/new-future-section.png"
import {
    Container,
    Row,
    MenuEsquerdo,
    Wrapper,    
    Menu,   
    Input

} from './styles'


/*E depois criamos uma exportação da função que monta o os nossos componentes a nossa página */ 

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                  <img src={logo} alt="Logo da dio"/>
                  <Input>
                    <input placeholder="Buscar..." />
                  </Input>
                  <Menu>Live Code</Menu>
                  <Menu>Global</Menu>
                </Row>
                <Row>
                    <MenuEsquerdo href="#">Home</MenuEsquerdo>
                     <Button title="Entrar"></Button>
                     <Button title="Cadastrar"></Button>
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }


/*O Wrapper será todo o nosso background ele nada mais é do que um corpo que cobre tudo e faz o bakcground */

/*Container será o que segura todo o nosso conteudo do cabeçalho */

/*E como os elementos irão se organizar em linha , colocamos dentro do row   */