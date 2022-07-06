import { Container } from "./styles"

import pratoImg from "../../assets/Mask group.png"

export function ItemFood() {
  return(
    <Container>
      <img src={pratoImg} alt="Imagem do prato" />

      <div className="description">
        <div>
          <h1>1x Salada Radish</h1>
          <span>R$25,97</span>
        </div>

        <button type="button">Excluir</button>
      </div>
    </Container>
  )
}