import styled from "styled-components";

export const StyledHomeUnauthenticated = styled.div`
  width: 100vw;
  height: fit-content;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  
  .home_unauthenticated-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    .home_unauthenticated-fraction-separator {
      width: 100vw;
      height: 10px;
      background-color: var(--secondaryColorFour);
    }
  }
`