import { Container, Logo, Form } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignUp() {
  return (
    <Container>
      <Logo>
        <svg
  width="44"
  height="48"
  viewBox="0 0 44 48"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M22.0318 0.216492L43.4349 12.0918V35.8425L22.0318 47.7179L0.628698 35.8425V12.0918L22.0318 0.216492Z"
    fill="#065E7C"
  />
        </svg>

        <h1>Food Explorer</h1>
      </Logo>

      <Form>
        <div className="data">
          <h1>Crie sua conta</h1>

          <div>
            <span>Seu nome</span>
            <Input type="text" placeholder="Exemplo: Vinicius Menezes"/>
          </div>

          <div>
            <span>E-mail</span>
            <Input type="text" placeholder="Exemplo: exemplo@exemplo.com.br"/>
          </div>

          <div>
            <span>Senha</span>
            <Input type="password" placeholder="No mínimo 6 caractéres"/>
          </div>

        <Button title="Crie sua conta" />

        <a href="/">
          Já tenho uma conta
        </a>
        </div>

      </Form>
    </Container>
  )
}