import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height:100vh;

  display:flex;
  flex-direction:column;

  > :nth-child(2) {
    padding: 0 12.3rem;
  }

  > main {
    overflow-y:auto;
    padding: 0 11.3rem 0 12.3rem;
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

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  font-family: "Roboto", serif;

  border:1px solid ${({theme}) => theme.COLORS.BORDER_TABLE};

  > thead th {
    font-size: 1.4rem;
    padding: 2.1rem 0 2.1rem 2.4rem;

    color: ${({theme}) => theme.COLORS.WHITE_200};
    text-align:left;

    
    border-top: 1px solid ${({theme}) => theme.COLORS.BORDER_TABLE};
    border-right: 1px solid ${({theme}) => theme.COLORS.BORDER_TABLE};
  }

  > tbody td {
    font-size: 1.4rem;
    padding:1.6rem 0 1.6rem 2.4rem;

    color: ${({theme}) => theme.COLORS.GRAY_100};
    text-align: left;

    border-top: 1px solid ${({theme}) => theme.COLORS.BORDER_TABLE};
    border-right: 1px solid ${({theme}) => theme.COLORS.BORDER_TABLE};

  }

  >tbody tr .order {
    display:flex;
    align-items:center;
    gap:10px;
  }
`