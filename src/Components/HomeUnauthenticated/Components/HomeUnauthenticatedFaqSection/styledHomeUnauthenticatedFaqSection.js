import styled from "styled-components";

export const StyledHomeUnauthenticatedFaqSection = styled.div`
  width: 100vw;
  height: fit-content;
  padding: 75px 0;
  
  .home_unauthenticated-faq-section-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    
    .home_unauthenticated-faq-section-title {
      text-align: center;
      font-size: var(--desktopTitleFontSize);
      font-weight: var(--desktopTitleFontWeight);
      color: var(--primaryColorOne);

 
      
    }
    
    .home_unauthenticated-faq-section-accordion-container {
      width: 100%;
      height: fit-content;
      color: var(--primaryColorOne);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      
      .home_unauthenticated-faq-section-accordion-question-answer-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 5px;
        
        
        .home_unauthenticated-faq-section-accordion-question {
          width: 60%;
          padding: 30px;
          background-color: var(--secondaryColorOne);
          font-size: var(--desktopSubTitleFontSize);
          font-weight: var(--desktopSubTitleFontWeight);
          cursor: pointer;
          transition-duration: 250ms;
          transition-property: background-color;
          transition-timing-function: cubic-bezier(0.9, 0, 0.51, 1);

          @media only screen and (max-width: 1600px) {
            width: 90%;
            padding: 25px;
          }
          
          &:hover {
            background-color: var(--secondaryColorTwo);
          }
          
          .home_unauthenticated-faq-section-accordion-question-title-icon-container {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            
            .home_unauthenticated-faq-section-accordion-question-svg-inactive-container {
              svg {
                width: 30px;
                height: 30px;
                fill: var(--primaryColorOne);
                

               
              }
            }
            
            .home_unauthenticated-faq-section-accordion-question-svg-active-container {
              svg {
                width: 30px;
                height: 30px;
                transform: rotate(45deg);
                fill: var(--primaryColorOne);
                
              }
            }
          }
        }
        
        .home_unauthenticated-faq-section-accordion-answer-container {
          height: fit-content;
          width: 60%;
          padding: 30px;
          background-color: var(--secondaryColorOne);
          display: flex;
          justify-content: center;
          align-items: start;
          flex-direction: column;
          gap: 20px;
          font-size: var(--desktopSubTitleFontSize);
          font-weight: var(--desktopSubTitleFontWeight);    
          transition: all 0.25s cubic-bezier(0.5, 0, 0.1, 1) 0s;

          @media only screen and (max-width: 1600px) {
            width: 90%;
            padding: 25px;
          }
        }
      }
    }

    .home_unauthenticated-faq-section-header-input-button-wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
      flex-direction: column;
      
      
      .home_unauthenticated-faq-section-header-content-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--primaryColorOne);
        font-size: var(--desktopContentFontSize);
        font-weight: var(--desktopSubContentFontWeight);

      
      }
      
      .home_unauthenticated-faq-section-input-button-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

     
        
        .home_unauthenticated-faq-section-input-container {
          width: fit-content;
          height: fit-content;
          display: flex;
          flex-direction: column;
          position: relative;
          

          .home_unauthenticated-faq-section-input {
            width: 375px;
            height: 52.5px;
            background: linear-gradient(90deg, rgba(15, 15, 15, 1), rgba(15, 15, 15, 1) );
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
              font-size: var(--errorFontSize);
            }

          }
        }

        .home_unauthenticated-faq-section-button-container {
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
                opacity: 0.7;
                cursor: not-allowed;
              }

              &:hover {
                background-color: var(--buttonHoverBackgroundColor);
              }

              .home_unauthenticated-faq-section-button-title {
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: var(--desktopSubTitleFontSize);
                font-weight: var(--buttonFontWeight);
                width: fit-content;
              }

              .home_unauthenticated-faq-section-angle-container {
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
  }
`