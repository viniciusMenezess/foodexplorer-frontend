import { Container, Table } from "./styles"

import pending from "../../assets/pending.svg"
import preparing from "../../assets/preparing.svg"
import delivered from "../../assets/delivered.svg"

import { Header } from "../../components/Header"
import { Section } from "../../components/Section"

export function Orders() {
  return(
    <Container>
      <Header/>

      <Section title="Pedidos" />

      <main>
        <Table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Código</th>
              <th>Detalhamento</th>
              <th>Data e hora</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="order">
                <img src={pending} alt="" />
                Pendente
              </td>
              <td className="code">
                00000004
              </td>

              <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>

              <td>20/05 às 18h00</td>
            </tr>

            <tr>
              <td className="order">
                <img src={preparing} alt="" />
                Pendente
              </td>
              <td className="code">
                00000003
              </td>

              <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>

              <td>20/05 às 18h00</td>
            </tr>

            <tr>
              <td className="order">
                <img src={delivered} alt="" />
                Entregue
              </td>
              <td className="code">
                00000002
              </td>

              <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>

              <td>20/05 às 18h00</td>
            </tr>

            <tr>
              <td className="order">
                <img src={delivered} alt="" />
                Entregue
              </td>
              <td className="code">
                00000001
              </td>

              <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>

              <td>20/05 às 18h00</td>
            </tr>
          </tbody>
        </Table>
      </main>
    </Container>
  )
}