import styled from "styled-components"

export const Container = styled.header`
  width:100%;
  height:10.4rem;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  padding: 2.8rem 12.3rem;

  display:grid;
  grid-template-columns:  1fr auto;
  grid-template-areas: 
  "logo buttons"
  ;

  gap:3.2rem;
`

export const Logo = styled.div`
  grid-area: logo;

  display:flex;
  align-items: center;
  gap:3.2rem;

  > div {
    min-width:fit-content;
    display:flex;
    align-items: center;
    gap:1.1rem;
    font-size: 2.5rem;
    text-transform:lowercase;
  }

  a{
    font-family: "Roboto", serif;
    color: ${({theme}) => theme.COLORS.WHITE_100};
    min-width:fit-content;
  }

`

export const Buttons = styled.div`
  grid-area: buttons;

  display:flex;
  align-items:center;
  gap: 3.2rem;
`

export const Logout = styled.button`
  display:flex;
  align-items:center;
  
  color: ${({theme}) => theme.COLORS.WHITE_100};
  background: transparent;
  border:0;
`


