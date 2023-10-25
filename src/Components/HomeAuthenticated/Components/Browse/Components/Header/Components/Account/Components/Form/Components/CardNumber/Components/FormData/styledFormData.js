import styled from "styled-components";

export const StyledFormData = styled.div`
  width: 100vw;
  height: fit-content;
  min-height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: ${props => props?.inactive ? "none" : "all"};


  .account_credit-card-form-data-wrapper {
    width: 30vw;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    position: relative;


    .form-error {
      width: 100%;
      position: absolute;
      text-align: center;
      color: var(--secondaryErrorColor);
      font-size: var(--errorFontSize);
      top: -22px;
    }

    .form-success {
      width: 100%;
      position: absolute;
      text-align: center;
      color: var(--successColor);
      font-size: var(--errorFontSize);
      top: -22px;
    }

    .account_credit-card-form-data-title {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 32px;
      text-align: center;
      font-weight: 500;
      color: var(--primaryColorThree);
    }

    .account_credit-card-form-data-images-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 7.5px;

      img {
        height: 25px;
      }
    }

    .account_credit-card-form-data-inputs-container {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 30px;

      .account_credit-card-form-data-single-input-container {
        width: 100%;
        height: 100%;
        position: relative;


        .account_credit-card-form-data-single-input {
          height: 60px;
          width: 100%;
          border: 1px solid #8c8c8c;
          border-radius: 2px;
          font-size: 16px;
          color: var(--primaryColorThree);
          padding: 0;
          margin: 0;
          text-indent: 15px;

          ::placeholder {
            color: #8c8c8c;
            font-size: 16px;
          }

          &:focus {
            outline: 2.2px solid var(--primaryColorThree);
            outline-offset: 2.5px;
          }
        }

        .card-field-image-container {
          position: absolute;
          top: 35%;
          right: 15px;
          border-radius: 2px;
          height: 20px;
          border: 0.1px solid #8c8c8c;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 35px;


          img {
            height: 25px;
          }

          svg {
            height: 15px;
            fill: #8c8c8c;
          }
        }


        .field_error-icon-container {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          top: 110%;
          gap: 7.5px;

          .field_error-icon {
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
              fill: var(--errorColor);
            }
          }

          .field_error-content {
            color: var(--errorColor);
          }
        }

        .error-cardNumber-success {
          border: 1px solid var(--successColor);
        }

        .error-cardNumber-active {
          border: 1px solid var(--errorColor);
        }

        .error-expirationDate-active {
          border: 1px solid var(--errorColor);
        }

        .error-expirationDate-success {
          border: 1px solid var(--successColor);
        }

        .error-ccv-success {
          border: 1px solid var(--successColor);
        }

        .error-ccv-active {
          border: 1px solid var(--errorColor);
        }


        .error-firstName-success {
          border: 1px solid var(--successColor);
        }

        .error-firstName-active {
          border: 1px solid var(--errorColor);
        }

        .error-lastName-success {
          border: 1px solid var(--successColor);
        }

        .error-lastName-active {
          border: 1px solid var(--errorColor);
        }
      }
    }
    
    .account_credit-card-form-data-buttons-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2vw;
      flex-direction: row;

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