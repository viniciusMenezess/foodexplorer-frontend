import styled from "styled-components"

export const Container = styled.div`
  width:100%;
  height:7.7rem;

  padding: 3rem 12.3rem;

  display: flex;
  align-items:center;
  justify-content:space-between;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

  >div {
    display:flex;
    align-items:center;
    gap:1.1rem;

    img {
      color: ${({theme}) => theme.COLORS.WHITE_OPACITY};
    }

    strong {
      font-family: "Roboto", serif;
      font-weight:700;
      font-size:2.5rem;
      color: ${({theme}) => theme.COLORS.WHITE_OPACITY};
      text-transform: lowercase;
    }
  }

  > span {
    font-size:1.4rem;
    color: ${({theme}) => theme.COLORS.WHITE_100}
  }
`