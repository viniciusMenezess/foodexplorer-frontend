import styled from "styled-components"

export const Container = styled.button`
  min-width:fit-content;
  height:5.6rem;

  display:flex;
  align-items:center;
  justify-content:center;

  background-color:${({theme}) => theme.COLORS.RED};
  color:${({theme}) => theme.COLORS.WHITE_100};

  border:0;
  border-radius:0.5rem;
  padding: 1.7rem 3.3rem;

  > svg {
    margin-right: 1.1rem;
  }
`