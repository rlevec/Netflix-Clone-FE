import styled from "styled-components";

export const StyledHomeUnauthenticatedHeader = styled.div`
  width: 100%;
  background-image: ${props => props?.backgroundImage && `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${props.backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 225px;

  

  .home_unauthenticated-header-logo-custom-select-container {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 47%;

    @media only screen and (max-width: 1600px) {
      gap: 66%;
    }


    


    .home_unauthenticated-header-logo-container {

      svg {
        width: 150px;
        height: 75px;
        
      }
    }

    .home_unauthenticated-header-custom-select-sign-in-container {
      width: fit-content;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 25px;

    


      .home_unauthenticated-header-sign-in-container {
        width: fit-content;
        height: fit-content;

        a {
          text-decoration: none;
          
          button {
            width: 80px;
            height: 35px;
            padding: 7.5px 15px;
            text-align: center;
            font-size: var(--desktopSignInButtonFontSize);
            font-weight: var(--buttonFontWeight);
            border-radius: var(--borderRadius);
            border: none;
            background-color: var(--primaryColorTwo);
            color: var(--primaryColorOne);
            cursor: pointer;
            transition: background-color 0.5s;

            &:hover {
              background-color: var(--buttonHoverBackgroundColor);
            }
          }
        }
        
      }

      .home_unauthenticated-header-custom-select-container {
        width: fit-content;
        height: fit-content;
        position: relative;

        .home_unauthenticated-header-custom-select-active {
          width: 110px;
          height: fit-content;
          border: 1px solid var(--borderColor);
          background-color: var(--primaryColorThree);
          color: var(--primaryColorOne);
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          padding: 7.5px 15px;
          border-bottom-right-radius: ${props => props?.languageDropdownActive ? "none" : "0.25rem"};
          border-bottom-left-radius: ${props => props?.languageDropdownActive ? "none" : "0.25rem"};
          border-top-left-radius: var(--borderRadius);
          border-top-right-radius: var(--borderRadius);
          font-size: var(--desktopInputFontSize);
          cursor: pointer;

         

          .home_unauthenticated-header-custom-selected-language {
            width: 75px;
            display: flex;
            justify-content: center;
            align-items: center;

           
          }

          .home_unauthenticated-header-custom-select-active-svg-container {
            width: fit-content;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
              width: 15px;
              height: 15px;
              fill: var(--primaryColorOne);
            }
          }
        }

        .home_unauthenticated-header-custom-select-dropdown {
          position: absolute;
          width: 140px;
          height: fit-content;
          background-color: var(--primaryColorThree);
          color: var(--primaryColorOne);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          border-bottom: 1px solid var(--borderColor);
          border-left: 1px solid var(--borderColor);
          border-right: 1px solid var(--borderColor);
          border-bottom-right-radius: var(--borderRadius);
          border-bottom-left-radius: var(--borderRadius);
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
          cursor: pointer;
          


          .home_unauthenticated-header-custom-select-dropdown-title-container {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 7.5px 0;
            height: 100%;

            &:first-child {
              border-bottom: 1px solid var(--borderColor);
            }
          }
        }
      }
    }

  }

  .home_unauthenticated-header-content-input-container {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 25px;
    padding-bottom: 175px;
    

    .home_unauthenticated-header-content-container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 25px;
      color: var(--primaryColorOne);

      .home_unauthenticated-header-header {
        font-size: var(--desktopTitleFontSize);
        font-weight: var(--desktopTitleFontWeight);
        
        

       

      }

      .home_unauthenticated-header-subHeader {
        font-size: var(--desktopSubTitleFontSize);
        font-weight: var(--desktopSubTitleFontWeight);
        
        
      }

      .home_unauthenticated-header-content {
        font-size: var(--desktopContentFontSize);
        font-weight: var(--desktopSubContentFontWeight);
        
      }
    }

    .home_unauthenticated-header-input-button-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      

      .home_unauthenticated-header-input-container {
        width: fit-content;
        height: fit-content;
        display: flex;
        flex-direction: column;
        position: relative;


        .home_unauthenticated-header-input {
          width: 375px;
          height: 52.5px;
          background: linear-gradient(90deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));
          border-radius: var(--borderRadius);
          opacity: 0.9;
          color: var(--primaryColorOne);
          text-indent: 10px;
          border: 1px solid var(--borderColor);
          font-size: var(--desktopInputFontSize);

      

          &::placeholder {
            color: var(--inputColorOne);
          }

          &:-webkit-autofill:focus,
          &:-webkit-autofill {
            transition: background-color 600000s 0s, color 600000s 0s;
          }

          &:hover {
            outline: none;
          }

          &:focus {
            outline: 2.2px solid vaR(--primaryColorOne);
            outline-offset: 2.5px;
          }
        }

        .error-active {
          border: 1px solid var(--errorColor);
        }

        .error-success {
          border: 1px solid var(--successColor);
        }

        .field_error-icon-container {
          position: absolute;
          top: 112.5%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 7.5px;
          


          .field_error-icon {
            width: fit-content;
            height: fit-content;
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
              fill: var(--errorColor);
            }
          }

          .field_error-content {
            color: var(--errorColor);
            font-size: vaR(--errorFontSize);
          }

        }
      }

      .home_unauthenticated-header-button-container {
        width: fit-content;
        height: fit-content;

        a {
          text-decoration: none;
          
          
          button {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2.5px;
            width: 100%;
            height: 57px;
            padding: 0 20px;
            background-color: var(--primaryColorTwo);
            border: none;
            border-radius: var(--borderRadius);
            color: var(--primaryColorOne);
            cursor: pointer;
            

            &:disabled {
              opacity: 0.85;
              cursor: not-allowed;
            }

            &:hover {
              background-color: var(--buttonHoverBackgroundColor);
            }

            .home_unauthenticated-header-button-title {
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: var(--desktopSubTitleFontSize);
              font-weight: var(--buttonFontWeight);
              width: fit-content;
              
            }

            .home_unauthenticated-header-angle-container {
              width: fit-content;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;

              svg {
                width: 23.5px;
                height: 23.5px;
                fill: var(--primaryColorOne);
              }
            }
          }  
        }
        
      }
    }
  }
`