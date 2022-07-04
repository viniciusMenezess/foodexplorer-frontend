import {Container} from "./styles"
import PolygonWhite from "../../assets/polygonwhite.svg"

export function Footer() {
  return(
    <Container>
      <div>
        <img src={PolygonWhite} alt="Imagem de um poligono" />
        <strong>Food Explorer</strong>
      </div>

      <span>© 2022 - Developed by Vinicius Menezes.</span>
    </Container>
  )
}