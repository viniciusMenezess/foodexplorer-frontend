import {BsSearch } from "react-icons/bs"
import { FiLogOut } from "react-icons/fi"
import { MdOutlineFactCheck } from "react-icons/md"
import Polygon from "../../assets/Polygon.svg"

import { Container, Logo, Buttons, Logout } from "./styles"

import {Button} from "../Button"
import {Input} from "../Input"

export function Header() {
  return(
    <Container>
      <Logo>
        <div>
          <img src={Polygon} alt="Imagem de um poligono azul" />
          <strong>Food Explorer</strong>
        </div>

        <a href="/">Meus favoritos</a>

        <Input placeholder="Busque pelas opções de pratos" icon ={BsSearch}/>

      </Logo>
          
      <Buttons>
        <Button title="Meus pedidos (0)" icon={MdOutlineFactCheck}/>   

        <Logout>
          <FiLogOut size={30}/>
        </Logout>
        
        </Buttons>   
      
    </Container>
  )
}