import { useState } from "react"
import incrementImg from "../../assets/increment.svg"
import decrementImg from "../../assets/decrement.svg"
import {Container, Increment, Decrement} from "./styles"

export function Counter() {
  const [count, setCount] = useState(0)

  return(
    <Container>

      <Decrement type="button" onClick={()=> setCount((count) => count - 1) }>
        <img src={decrementImg} alt="" />
      </Decrement>

      <span>{count}</span>

      <Increment type="button" onClick={()=> setCount((count) => count + 1)}>
        <img src={incrementImg} alt="" />
      </Increment>

    </Container>
  )
}