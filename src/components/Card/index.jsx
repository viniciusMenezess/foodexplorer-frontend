import pratoImg from "../../assets/Mask group.png"

import {Container} from "./styles"
import {Button} from "../Button"
import {Counter} from "../Counter"

export function Card({title, description, price}) {
  return(
    <Container>
      <img src={pratoImg} alt="" />
      
      <h2>Salada Ravanello</h2>
      <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

      <h1>R$49,97</h1>

      <div>
        <Counter/>
        <Button title="Incluir"/>
      </div>
    </Container>
  )
}