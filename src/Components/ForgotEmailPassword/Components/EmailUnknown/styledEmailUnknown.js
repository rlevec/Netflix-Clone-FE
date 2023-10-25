import {styled} from "styled-components";

export const StyledEmailUnknown = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 25px;

  .email_unknown-paragraph-title {
    width: 100%;
    color: #333;
    font-weight: 400;
    font-size: 16px;
    text-align: left;
  }

  .email_unknown-inputs-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    flex-direction: column;
    gap: 25px;

    .email_unknown-input-container {
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
      
      .card-field-image-container {
        position: absolute;
        top: 30%;
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

      .error-firstName-active {
        border: 1px solid var(--errorColor);
      }

      .error-firstName-success {
        border: 1px solid var(--successColor);
      }

      .error-lastName-active {
        border: 1px solid var(--errorColor);
      }

      .error-lastName-success {
        border: 1px solid var(--successColor);
      }

      .error-cardNumber-active{
        border: 1px solid var(--errorColor);
      }

      .error-cardNumber-success{
        border: 1px solid var(--successColor);
      }
      
    }
  }

  .email_unknown-buttons-container {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
    
    .email_unknown-button-findAccount {
      font-size: 13px;
      line-height: 1em;
      margin-right: 0.5em;
      min-height: 37px;
      min-width: 98px;
      padding: 12px 1em;
      width: auto;
      background-color: #0080ff;
      background-image: linear-gradient(180deg,#0080ff,#0277ec);
      box-shadow: 0 1px 0 rgba(0,0,0,.55);
      color: #fff;
      border: none;
      font-weight: 400;
      border-radius: 2px;
      cursor: pointer;
      
      &:disabled {
        opacity: 0.8;
        cursor: not-allowed;
      }
      
      &:hover {
        background: #2490fd;
        box-shadow: 0 1px 0 rgba(0,0,0,.55);
      }
    }

    .email_unknown-button-cancel {
      font-size: 13px;
      line-height: 1em;
      margin-right: 0.5em;
      min-height: 37px;
      min-width: 98px;
      padding: 12px 1em;
      width: auto;
      background-color: #e6e6e6;
      background-image: linear-gradient(180deg,#e6e6e6,#ddd);
      box-shadow: 0 1px 0 rgba(0,0,0,.2);
      color: #000;
      border: none;
      font-weight: 400;
      border-radius: 2px;
      cursor: pointer;
      
      &:hover {
        background: #eaeaea;
        box-shadow: 0 1px 0 rgba(0,0,0,.2)
      }
    }
  }
`