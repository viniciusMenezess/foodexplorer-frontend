import styled from 'styled-components'

export const Container = styled.div`
  width:100%;
  display:flex;
  align-items:center;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  color: ${({theme}) => theme.COLORS.WHITE_100};

  border-radius: 0.5rem;
  line-height: 100%;

  > input {
    height:5.6rem;
    width:100%;

    padding:1.2rem;
    
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

  > svg {
      margin-left: 1.4rem;
      color: ${({theme}) => theme.COLORS.GRAY_200}
    }
`