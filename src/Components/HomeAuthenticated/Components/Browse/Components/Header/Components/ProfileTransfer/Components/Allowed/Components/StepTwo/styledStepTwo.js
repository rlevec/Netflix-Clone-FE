import styled from "styled-components";

export const StyledStepTwo = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .step_two-wrapper {
    width: 30vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 25px;
    
    .step_two-header {
      color: black;
      font-size: 2.5vw;
      width: 100%;
      font-weight: 700;
      text-align: left;
      line-height: 42px;
    }
    
    .step-two_subheader {
      color: black;
      font-size: 1.25vw;
      width: 100%;
      font-weight: 400;
      text-align: left;
    }
    
    .step_two-profile-inputs-container {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 25px;
      
      .step_two-profile-img-container {
        width: fit-content;
        height: fit-content;
        
        img {
          width: 150px;
          height: 150px;
          border-radius: 4px;
        }
      }

      .step_two-inputs-container {
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        gap: 30px;

        .step_two_single-input-container {
          width: 100%;
          height: fit-content;
          position: relative;

          .password-show-container {
            position: absolute;
            height: fit-content;
            width: fit-content;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 37.5%;
            right: 2.5%;
            cursor: pointer;

            svg {
              fill: var(--secondaryColorThree);

              &:hover {
                fill: var(--primaryColorThree);
              }
            }
          }

          input {
            width: 100%;
            padding: 1.25rem 0;
            text-indent: 1.25rem;
            border-radius: 4px;
            border: 1px solid var(--secondaryColorThree);
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
              outline: 2.2px solid var(--primaryColorThree);
              outline-offset: 2.5px;
            }
          }

          .error-active {
            border: 1px solid var(--errorColor);
          }

          .error-password-active {
            border: 1px solid var(--errorColor);
          }

          .error-success {
            border: 1px solid var(--successColor);
          }

          .error-password-success {
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
                fill: var(--secondaryErrorColor);
              }
            }

            .field_error-content {
              color: var(--secondaryErrorColor);
              font-size: var(--errorFontSize);
              text-align: justify;
            }

          }
        }
      }
    }
  }
`