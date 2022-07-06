import styled from "styled-components"

export const Container = styled.div`
  width:100%;
  height:100vh;

  display:flex;
  flex-direction:column;

  > main {
    padding: 0 12.3rem;
    overflow-y:auto;
  }

  > footer {
    bottom: 0;
    position: fixed;
    text-align: center;
    width:100%;

    >:first-child {
      height:12.4rem;
    }
  }
`

export const Content = styled.div`
  width:100%;

  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
  "items payment"
`

export const Items = styled.div`
  width:100%;

  >p {
    margin-top:2rem;
    font-size:2.0rem;
    color: ${({theme}) => theme.COLORS.WHITE_200};
    letter-spacing:0.9px;
  }
`

export const Payment = styled.div`
  width:100%;

  > .buttons {
    width:53rem;

    border: 2px solid ${({theme}) => theme.COLORS.BORDER_TABLE};
    border-top-left-radius: .8rem;
    display:flex;
    align-items:center;
    justify-content:space-evenly;

    padding: 1.2rem 1.4rem;

    > button {
      display:flex;
      justify-content:center;
      align-items:center;
      gap:1.4rem;

      padding: 1.2rem 1.4rem;

      font-family:"Roboto", serif;
      font-weight: 400;

      background:transparent;
      border:none;

      width:100%;

      color: ${({theme}) => theme.COLORS.WHITE_100};
    }
  }

  > .command {
    width:53rem;
    height:30.7rem;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:3.7rem;

    border: 2px solid ${({theme}) => theme.COLORS.BORDER_TABLE};

    p {
      font-size:2.0rem;
      color: ${({theme}) => theme.COLORS.GRAY_200}
    }
  }
`