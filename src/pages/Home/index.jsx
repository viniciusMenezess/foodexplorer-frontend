import candiesImg from "../../assets/candies.png"

import {Container, Rectangle} from "./styles"
import {Header} from "../../components/Header"
import {Card} from "../../components/Card"
import {Section} from "../../components/Section"

export function Home() {
  return (
    <Container>
      <Header/>

      <main>
        <Rectangle>
          <img src={candiesImg} alt="" />

          <div>
            <h1>Sabores inigualáveis</h1>
            <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
          </div>
        </Rectangle>

        <Section title="Pratos Principais" />

          <Card />

        

      </main>

    </Container>
  )
}