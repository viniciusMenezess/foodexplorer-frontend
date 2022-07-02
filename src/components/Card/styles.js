import styled from "styled-components"

export const Container = styled.div`
  width:30rem;

  display:flex;
  align-items:center;
  flex-direction:column;

  padding: 5.6rem 4rem 4rem 4rem;

  background: rgba(0, 0, 0, 0.32);
  border: 1px solid rgba(0, 0, 0, 0.65);
  border-radius: 8px;
  color: ${({theme}) => theme.COLORS.WHITE_100};

  > img {
    width:176px;
    height:176px;
  } 

  > h2 {
    font-size:2.4rem;
    color: ${({theme}) => theme.COLORS.WHITE_200};
    margin-top:1.6rem;
  }

  > p {
    width:22rem;
    text-align:center;
    line-height: 160%;
    font-style: normal;
    margin-top:1.6rem;

    font-family: "Roboto", serif;
    font-size:1.4rem;
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }

  > h1 {
    color: ${({theme}) => theme.COLORS.BLUE};
    font-weight: 400;
    margin-top: 1.6rem;
  }

  > div {
    display:flex;
    align-items:center;
    margin-top:1.6rem;
    gap: 1.6rem;
  }



`