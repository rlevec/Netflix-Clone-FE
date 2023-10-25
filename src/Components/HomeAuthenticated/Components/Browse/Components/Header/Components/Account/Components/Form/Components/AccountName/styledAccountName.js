import styled from "styled-components";

export const StyledAccountName = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  pointer-events: ${props => props?.inactive ? "none" : "all"};
  
  .account_name-wrapper {
    width: 30vw;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;



    .form-error {
      width: 100%;
      position: absolute;
      text-align: center;
      color: var(--secondaryErrorColor);
      font-size: var(--errorFontSize);
      top: 22.5px
    }

    .form-success {
      width: 100%;
      position: absolute;
      text-align: center;
      color: var(--successColor);
      font-size: var(--errorFontSize);
      top: 22.5px
    }
    
    
    .account_name-title {
      width: 100%;
      font-size: 32px;
      font-weight: 500;
      text-align: center;
    }

    .account_name-input-container {
      width: 100%;
      height: fit-content;
      position: relative;

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

      .error-accountName-active {
        border: 1px solid var(--errorColor);
      }


      .error-accountName-success {
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

    .account_name-button-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2vw;
      flex-direction: row-reverse;

      .backButton-container {
        button {
          width: 14vw;
          height: 64px;
          border-radius: 4px;
          font-size: 24px;
          font-weight: 400;
          background-color: var(--secondaryColorTwo);
          color: #fff;
          outline: none;
          border: none;
          cursor: pointer;

          @media (max-width: 576px) and (orientation: portrait) {
            width: 27.5vw;
          }

          &:hover {
            background-color: var(--secondaryColorThree);
          }
        }
      }

      .submitButton-container {
        button {
          width: 14vw;
          height: 64px;
          border-radius: 4px;
          font-size: 24px;
          font-weight: 400;
          background-color: #e50914;
          color: #fff;
          outline: none;
          border: none;
          cursor: pointer;

          @media (max-width: 576px) and (orientation: portrait) {
            width: 27.5vw;
          }

          &:hover {
            background-color: #f6121d;
          }

          &:disabled {
            opacity: 0.8;
            cursor: not-allowed;
          }

        }
      }
    }
  }
`