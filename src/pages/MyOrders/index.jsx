import { Container, Content, Items, Payment } from "./styles"

import pixSvg from "../../assets/pix.svg"
import creditCardSvg from "../../assets/creditcard.svg"
import clockSvg from "../../assets/Clock.svg"

import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Footer } from "../../components/Footer"
import { ItemFood } from "../../components/ItemFood"

export function MyOrders() {
  return(
    <Container>
      <Header/>

      <main>
        <Content>
          <Items>
            <Section title="Meu pedido"/>

            <ItemFood />
            <ItemFood />
            <ItemFood />
            <ItemFood />

            <p>Total: R$103,88</p>
          </Items>

          <Payment>
            <Section title="Pagamento"/>

            <div className="buttons">
              <button>
                <img src={pixSvg} alt="Logo do Pix" />
                PIX
              </button>
              <button>
                <img src={creditCardSvg} alt="Logo do cartão de crédito" />
                Crédito
              </button>
            </div>
            
            <div className="command">
                <img src={clockSvg} alt="Imagem de um relógio" />
                <p>Aguardando pagamento no caixa</p>
            </div>

          </Payment>
        </Content>
      </main>

    <footer>
      <Footer/>
    </footer>
    </Container>
  )
}