import styled from "styled-components"

export const Container = styled.div`
  width:100%;
  height:100vh;

  display:flex;
  flex-direction:column;

  > main {
    padding: 40px 123px;
    overflow-y:auto;
  }

`

export const Rectangle = styled.div`
  width:100%;
  height:28rem;

  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 8.7rem 4.62rem;
  margin-top:16.4rem;
  border-radius: 0.8rem;

  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

  >img {
    position:relative;
    bottom:54px;
  }

  > div {
    max-width:fit-content;
    margin-right:150px;
    h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 4rem;
    letter-spacing:1px;
    line-height: 140%;

    color: ${({theme}) => theme.COLORS.WHITE_200};
    }

    span {
      letter-spacing:1px;
      color: ${({theme}) => theme.COLORS.WHITE_200};
    }
  }
  


`