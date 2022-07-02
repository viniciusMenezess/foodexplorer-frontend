import styled from "styled-components"

export const Container = styled.section`
  width:100%;
  margin-top:6.2rem;
  margin-bottom:3.9rem;

  >h1 {
    font-size:3.2rem;
    font-weight: 400;
    line-height: 140%;

    color: ${({theme}) => theme.COLORS.WHITE_200}
  }
`