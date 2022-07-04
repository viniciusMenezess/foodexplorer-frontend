import styled from "styled-components"

export const Container = styled.div`
  width:100%;
  height:100vh;

  > a {
    display:flex;
    align-items:center;

    padding: 0 12rem;
    margin-top:2.4rem;

    font-size:2.4rem;
    color: ${({theme}) => theme.COLORS.WHITE_100};
    
  }

  > footer {
    bottom: 0;
    position: fixed;
    text-align: center;
    width:100%;
  }
  `

export const Content = styled.div`
  width:100%;
  
  display:flex;
  align-items:center;
  gap:4.1rem;
  
  padding: 0 21.232rem 0 20rem;
  margin-top:5rem;
  
  > img {
    width: 50rem;
    height: 50rem;
  }

  > .description {
    width:100%;

    h1 {
      font-size:4.0rem;
      font-weight: 400;
      line-height: 140%;
      color: ${({theme}) => theme.COLORS.WHITE_200};
    }

    > p {
      margin-top:.8rem;
      font-size:2.4rem;
      line-height: 140%;
      font-weight: 400;
      color: ${({theme}) => theme.COLORS.WHITE_200};
      width:60rem
    }

    .ingredients {
      display:flex;
      align-items:center;
      gap:1.6rem;

      margin-top:2.6rem;
      
      div {
        display:flex;
        flex-direction:column;

        > img {
          width:5rem;
          height:5rem;
        }
      }
    }

    > .controls {
      display:flex;
      align-items:center;

      margin-top: 4.729rem;
      
      p {
        font-size:3.2rem;
        color: ${({theme}) => theme.COLORS.BLUE};
      }

      >:nth-child(2) {
        margin: 0 2.4rem 0 5.374rem;
      }
    }
  }
`