import styled from "styled-components";

export const StyledHomeAuthenticated = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: black;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--primaryColorTwo);
  }
`;