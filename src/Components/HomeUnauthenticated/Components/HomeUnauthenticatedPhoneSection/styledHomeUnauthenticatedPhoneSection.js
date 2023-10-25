import styled from "styled-components";

export const StyledHomeUnauthenticatedPhoneSection = styled.div`
  width: 100vw;
  height: fit-content;
  padding: 60px 0;

  .home_unauthenticated-phone-section-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    

    .home_unauthenticated-phone-section-content-container {
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
      


      .home_unauthenticated-phone-section-content-title {
        font-size: var(--desktopTitleFontSize);
        font-weight: var(--desktopTitleFontWeight);
        
        
      }

      .home_unauthenticated-phone-section-content-subTitle {
        font-size: var(--desktopSubTitleFontSize);
        font-weight: var(--desktopSubTitleFontWeight);

    

      }

    }

    .home_unauthenticated-phone-section-media-container {
      width: fit-content;
      height: fit-content;
      position: relative;

      .home_unauthenticated-phone-section-media-image-container {
        width: fit-content;
        height: fit-content;

        .media-image {
          width: 800px;
          height: fit-content;
          position: relative;
          z-index: 2;

          @media only screen and (max-width: 1600px) {
            width: 550px;
          }

      
          
        }
      }

      .home_unauthenticated-phone-section-media-movie-image-content-wrapper {
        position: absolute;
        top: 73%;
        left: 23.5%;
        z-index: 3;
        width: 400px;
        height: 125px;
        background-color: var(--primaryColorThree);
        border: 1px solid var(--borderColor);
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        padding: 0 10px;

        @media only screen and (max-width: 1600px) {
          top: 67.5%;
          width: 270px;
          height: 100px;
        }

   
        

        .home_unauthenticated-phone-section-media-movie-image-content-container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: start;
          align-items: center;
          gap: 10px;

          .movie-media-img {
            width: 75px;
            height: 100px;

            @media only screen and (max-width: 1600px) {
              width: 70px;
              height: 90px;
            }
          }

          .home_unauthenticated-phone-section-media-movie-content-container {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: start;

            .home_unauthenticated-phone-section-media-movie-content-title {
              font-size: var(--desktopInputFontSize);
              font-weight: 500;
              color: var(--primaryColorOne);
            }

            .home_unauthenticated-phone-section-media-movie-content-subtitle {
              font-size: 14px;
              font-weight: 400;
              color: #0071eb;
            }
          }
        }

        .home_unauthenticated-phone-section-media-movie-image-svg-container {
          height: 100%;
          width: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-right: 20px;


          .loader {
            width: 25px;
            height: 25px;
            border-radius: 50%;
            padding: 1px;
            background: conic-gradient(#0000 10%, #0071eb) content-box;
            mask-composite: intersect;
            animation: s4 3s infinite;
          }

          @keyframes s4 {
            to {
              transform: rotate(1turn)
            }
          }

          svg {
            width: 25px;
            height: 25px;
            fill: #0071eb;
          }
        }

      }
    }
  }
`