import styled from "styled-components";

export const StyledMediaPlayer = styled.div`
  height: fit-content;
  width: fit-content;
  position: relative;

  .close-player-container {
    position: absolute;
    width: fit-content;
    height: fit-content;
    z-index: 25252;
    cursor: pointer;
    left: 93.5vw;
    top: 2.5vw;

    svg {
      width: 75px;
      height: 75px;
      fill: #8b0000;
    }

    &:hover {
        svg {
            fill: var(--errorColor);
        }
    }
  }

  video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: fixed;
    top: 0;
    left: 0;
  }
`;
