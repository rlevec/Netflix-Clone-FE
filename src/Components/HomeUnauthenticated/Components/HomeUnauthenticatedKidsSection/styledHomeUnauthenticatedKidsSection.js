import styled from "styled-components";

export const StyledHomeUnauthenticatedKidsSection = styled.div`
  width: 100vw;
  height: fit-content;
  padding: 60px 0;

  .home_unauthenticated-kids-section-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    

    .home_unauthenticated-kids-section-content-container {
      width: 800px;
      color: var(--primaryColorOne);
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: start;
      flex-direction: column;
      gap: 20px;

      @media only screen and (max-width: 1600px) {
        width: 550px;
      }
      

      

      .home_unauthenticated-kids-section-content-title {
        font-size: var(--desktopTitleFontSize);
        font-weight: var(--desktopTitleFontWeight);
        
        
        
        
      }

      .home_unauthenticated-kids-section-content-subTitle {
        font-size: var(--desktopSubTitleFontSize);
        font-weight: var(--desktopSubTitleFontWeight);
        
        
      }

    }

    .home_unauthenticated-kids-section-media-container {
      width: fit-content;
      height: fit-content;
      position: relative;

      .home_unauthenticated-kids-section-media-image-container {
        width: fit-content;
        height: fit-content;

        img {
          width: 800px;
          height: fit-content;
          position: relative;
          z-index: 2;

          @media only screen and (max-width: 1600px) {
            width: 550px;
          }
        }
      }
    }
  }
`