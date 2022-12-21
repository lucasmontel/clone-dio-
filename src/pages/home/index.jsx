import { Header } from "../../assets/components/Header"
import { Container, Title, TitlePink, Paragrafo } from "./styles"

import Banner from "../../assets/img/new-future-section.png"
import { Button } from "../../assets/components/button"


/*Importamos o nosso botão criado em  uma outra pasta , ao invés de ficar criando  todas as vezes que formos usarmos */


const Home = () => {
    return (<>
        <h1>Home</h1>
        <Header />
        <Container>
            <div>
              <Title>
              <TitlePink>
                Implemente
                <br />
              </TitlePink>
              o seu futuro global agora
              </Title>
              <Paragrafo>
                Domine as tecnologias utilizadas pelas empresas mais ricas 
              </Paragrafo>

              <Button  onClick={{} = null} variant="secondary" title="Começar agora"></Button>
            </div>
            <div>
                <img src={Banner} alt="imagem" />
            </div>
        </Container>
    </>)
}

export { Home }

/*Na pasta styles dentro de componentes , nós criamos um botão 
depois disso , o chamamos aqui , e chamamos pela segunda vez , porém o segundo
foi especificado como secundário, criando assim dois botões*/


/*Nosso container será dividido em dois , um lado só terá a foto e outro o resto  */