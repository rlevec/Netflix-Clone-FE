import styled from "styled-components";

export const StyledStepSix = styled.div`
  width: 30vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  position: relative;
  pointer-events: ${props => props?.inactive ? "none" : "all"};
  


  .step_six-form-error {
    width: 100%;
    position: absolute;
    text-align: center;
    color: var(--secondaryErrorColor);
    font-size: var(--errorFontSize);
    top: -22.5px
  }
  
  .step_six-form-success {
    width: 100%;
    position: absolute;
    text-align: center;
    color: var(--successColor);
    font-size: var(--errorFontSize);
    top: -22.5px
  }

  .step_six-title {
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

  .step-six-card-images-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7.5px;

    img {
      height: 25px;
    }
  }

  .step_six-inputs-container {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;

    .step_six-single-input-container {
      width: 100%;
      height: 100%;
      position: relative;
      

      .step_six-input {
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

      .error-ccv-active{
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
  
  .active_plan-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f4f4f4;
    border-radius: 2px;
    height: 60px;
    margin-top: 15px;
    
    .active_plan-wrapper-price-title-container {
      height: fit-content;
      width: fit-content;
      display: flex;
      justify-content: center;
      align-items: start;
      flex-direction: column;
      gap: 5px;
      padding-left: 15px;
      
      .active_plan-wrapper-price {
        color: #333333;
        font-size: 16px;
        font-weight: 500;
      }
      
      .active_plan-wrapper-title {
        color: #737373;
        font-size: 16px;
        font-weight: 400;
      }
    }
    
    .active_plan-wrapper-button-container {
      width: fit-content;
      height: fit-content;
      padding-right: 15px;
      
      button {
        background: none;
        border: 0;
        color: #0071eb;
        cursor: pointer;
        font-size: 16px;
        font-weight: 500;
    
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  
  .step_six-credit-info-container {
    color: #8c8c8c;
    font-size: 13px;
  }
  
  .step_six-captcha-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .step_six-button-container {
    height: fit-content;
    width: 100%;
    
    button {
      width: 100%;
      background-color: #e50914;
      color: #ffffff;
      border-radius: 4px;
      font-size: 24px;
      font-weight: 400;
      min-height: 64px;
      border: none;
      cursor: pointer;
      
      &:hover {
        background-color: #f6121d
      }
      
      &:disabled {
        opacity: 0.8;
        cursor: not-allowed;
      }
    }
  }
  
  .step_six-captcha-info-container {
    color: #8c8c8c;
    font-size: 13px;
    
    a {
      color: #0071eb;
      text-decoration: none;
      cursor: pointer;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`
