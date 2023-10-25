import styled from "styled-components";

export const StyledStepTwo = styled.div`
  width: 30vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;



  .step_two-content-title {
    width: 100%;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
  }


  .step_two-content-desc-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2.5px;

    .step_two-content-desc {
      font-size: 18px;
      font-weight: 300;
      text-align: center;
      width: 100%;
    }

    .step_two-content-desc-sec {
      font-size: 18px;
      font-weight: 300;
      text-align: center;
      width: 100%;
    }
  }

  .step_two-content-inputs-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    gap: 30px;

    .step_two-content-single-input-container {
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

  .step_two-content-checkbox-input-container {
    width: 102.5%;
    height: fit-content;
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 10px;

    .step_two-content-checkbox-single-input-container {
      width: fit-content;
      height: fit-content;

      input {
        accent-color: var(--primaryColorTwo);
        cursor: pointer;
        width: 20px;
        height: 20px;
      }
    }

    .step_two-content-checkbox-single-label-container {
      label {
        font-size: 1rem;
        color: var(--primaryColorThree);
      }
    }
  }
`