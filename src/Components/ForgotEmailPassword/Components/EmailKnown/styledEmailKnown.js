import {styled} from "styled-components";

export const StyledEmailKnown = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 25px;

  .email_known-paragraph-title {
    width: 100%;
    color: #333;
    font-weight: 400;
    font-size: 16px;
    text-align: left;
  }

  .email_known-input-container {
    width: 100%;
    height: fit-content;
    position: relative;

    input {
      width: 100%;
      border: 1px solid #b3b3b3;
      border-radius: 2px;
      color: var(--primaryColorThree);
      display: block;
      font-size: 16px;
      height: 44px;
      text-indent: 10px;

      &:-webkit-autofill:focus,
      &:-webkit-autofill {
        transition: background-color 600000s 0s, color 600000s 0s;
      }

      &:hover {
        outline: none;
      }

      &:focus {
        outline: 2.2px solid #0080ff;
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
      top: 112%;
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

  .email_known-button-container {
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

  .email_known-forgot-container {
    width: 100%;
    color: #0080ff;
    text-decoration: none;
    cursor: pointer;
    font-size: 16px;
    text-align: left;
    font-weight: 400;
    
    &:hover {
      text-decoration: underline;
    }
  }
`