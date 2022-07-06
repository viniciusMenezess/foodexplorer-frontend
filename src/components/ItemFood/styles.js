import styled from "styled-components"

export const Container = styled.div`
  width:100%;

  display:flex;
  align-items:center;
  gap:1.3rem;

  margin-top:2.65rem;

  > img {
    width:7.2rem;
    height:7.2rem;
  }

  >.description {
    display:flex;
    flex-direction:column;

      > div {
        display:flex;
        align-items:center;
        gap:1rem;

          h1 {
            font-size:2.0rem;
            font-weight: 500;
            font-size: 2.0rem;
          }

          span {
            font-family: 'Roboto';
            font-weight: 400;
            font-size: 1.2rem;
            color: ${({theme}) => theme.COLORS.GRAY_100}
          }
        }

    > button {
      font-weight: 400;
      font-size: 1.2rem;
      text-align:left;

      background:transparent;
      border:none;
      color: ${({theme}) => theme.COLORS.RED_100};
    }
  }
`
