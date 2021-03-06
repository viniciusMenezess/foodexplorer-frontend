import styled from "styled-components"

export const Container = styled.div`
  width:100%;
  display:flex;
  align-items:center;

  background: transparent;
  color: ${({theme}) => theme.COLORS.WHITE_100};

  border: 1px solid ${({theme}) => theme.COLORS.WHITE_100};

  border-radius: 0.5rem;
  line-height: 100%;

  > input {
    height:4.8rem;
    width:100%;

    padding:1.6rem 1.4rem;
    
    color: ${({theme}) => theme.COLORS.WHITE_100};
    background:transparent;
    border:0;
    
    &::placeholder{
      color: ${({theme}) => theme.COLORS.GRAY_200};
    }

    &:focus {
      box-shadow:0 0 0 0; 
      outline: 0;
    }
  }
`