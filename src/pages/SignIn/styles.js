import styled from "styled-components"

export const Container = styled.div`
  width:100%;
  height:100vh;

  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
  "logo form";
`

export const Logo = styled.div`
  grid-area:logo;
  width:100%;

  display:flex;
  align-items:center;
  justify-content:center;
  gap:1.9rem;

  margin-top: -15rem;

  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 4.248rem;
    text-transform:lowercase;
  }
`

export const Form = styled.form`
  grid-area:form;
  width:100%;

  display:flex;
  align-items:center;
  justify-content:center;

  padding: 9.012rem 10.8rem 13.3rem 0;
  
  > .data {
    width:47.6rem;
    padding:6.4rem;

    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:3.2rem;

    border-radius:1.6rem;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

    > h1 {
      text-align:center;
      font-style: normal;
      font-weight: 400;
      font-size: 3.2rem;
    }

    > div {
      display:flex;
      flex-direction:column;
      gap: 0.8rem;
      span {
        font-size:1.6rem;
        color: ${({theme}) => theme.COLORS.GRAY_100}
      }
    }

    > a {
      text-align:center;
      color: ${({theme}) => theme.COLORS.WHITE_100}
    }
  }
`