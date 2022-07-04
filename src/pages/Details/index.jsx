import { RiArrowLeftSLine } from "react-icons/ri"
import { MdOutlineFactCheck } from "react-icons/md"
import { Container, Content } from "./styles"

import pratoImg from "../../assets/Mask group.png"

import lettuceImg from "../../assets/pngegg (6) 1.png"
import tomatoImg from "../../assets/pngegg (8) 1.png"
import radishImg from "../../assets/pngegg (7) 1.png"
import breadImg from "../../assets/pngegg (4).png"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { Counter } from "../../components/Counter"

export function Details() {
  return(
    <Container>
      <Header/>

      <a href="/">
        <RiArrowLeftSLine size={40}/>
        voltar
      </a>

      <Content>

      <img src={pratoImg} alt="Imagem do prato" />

      <div className="description">
        <h1>Salada Ravanello</h1>
        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
        
        <div className="ingredients">
          <div>
            <img src={lettuceImg} alt="imagem do alface" />
            <span>alface</span>
          </div>

          <div>
            <img src={tomatoImg} alt="imagem do tomate" />
            <span>tomate</span>
          </div>

          <div>
            <img src={radishImg} alt="imagem do rabanete" />
            <span>rabanete</span>
          </div>

          <div>
            <img src={breadImg} alt="imagem do Pão Naan" />
            <span>Pão Naan</span>
          </div>

        </div>


        <div className="controls">
          <p>R$25,97</p>
          <Counter/>
          <Button title="Incluir" icon={MdOutlineFactCheck} />
        </div>
      </div>

      </Content>

      <footer>
        <Footer/>
      </footer>

        

      
    </Container>
  )
}