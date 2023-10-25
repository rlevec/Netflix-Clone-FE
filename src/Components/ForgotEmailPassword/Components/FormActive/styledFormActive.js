import styled from "styled-components";

export const StyledFormActive = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 25px;

  .form_active-paragraph-title {
    width: 100%;
    color: #333;
    font-weight: 400;
    font-size: 16px;
    text-align: left;
  }

  .form_active-inputs-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    flex-direction: column;
    gap: 25px;

    .form_active-input-container {
      width: 100%;
      height: 100%;
      position: relative;

      input {
        width: 100%;
        border: 1px solid #b3b3b3;
        border-radius: 2px;
        display: block;
        font-size: 16px;
        height: 44px;
        text-indent: 10px;
        color: var(--primaryColorThree);

        &:hover {
          outline: none;
        }

        &:focus {
          outline: 2.2px solid #0080ff;
          outline-offset: 2.5px;
        }
      }

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
            fill: #0080ff;
          }
        }
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

      .error-newPassword-active {
        border: 1px solid var(--errorColor);
      }

      .error-newPassword-success {
        border: 1px solid var(--successColor);
      }

      .error-confirmNewPassword-active {
        border: 1px solid var(--errorColor);
      }

      .error-confirmNewPassword-success {
        border: 1px solid var(--successColor);
      }
      
    }
  }
  
  .form_active-button-container {
    width: 100%;
    height: fit-content;

    button {
      width: 100%;
      background-color: #0080ff;
      background-image: linear-gradient(180deg, #0080ff, #0277ec);
      box-shadow: 0 1px 0 rgba(0, 0, 0, .55);
      color: #fff;
      cursor: pointer;
      font-size: 20px;
      min-height: 48px;
      min-width: 112px;
      padding: 14px 2em;
      border: none;
      font-weight: 300;
      letter-spacing: 1.5px;

      &:hover {
        background: #2490fd;
        box-shadow: 0 1px 0 rgba(0, 0, 0, .55);
      }
      
      &:disabled {
        opacity: 0.8;
        cursor: not-allowed;
      }
      
    }
  }
`