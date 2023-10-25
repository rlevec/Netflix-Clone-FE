import styled from "styled-components";

export const StyledBillingDay = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  pointer-events: ${props => props?.inactive ? "none" : "all"};

  .billing_day-wrapper {
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

    .billing_day-title {
      width: 100%;
      font-size: 32px;
      font-weight: 500;
      text-align: center;
    }
    

    .billing_inputs-dropdown-container {
      position: relative;
      width: 50%;

      .billing_input-active-container {
        border: 1px solid #a6a6a6;
        border-radius: 2px;
        font-size: 16px;
        height: 60px;
        width: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
        cursor: pointer;
        gap: 25px;

        .billing_input-value {
          color: ${props => props?.valueForChange ? "black" : "#a6a6a6"};
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          font-weight: 500;
        }

        .billing_input-svg-container {
          width: fit-content;
          height: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;

          svg {
            width: 25px;
            height: 25px;
            fill: ${props => props?.valueForChange ? "black" : "#a6a6a6"};
          }
        }
      }

      .billing_dropdown-container {
        width: 100%;
        border: 1px solid #a6a6a6;
        border-top: none;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .billing_dropdown-content {
          height: 50px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-bottom: 1px solid #a6a6a6;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;

          &:hover {
            background-color: #a6a6a6;
          }

          &:last-child {
            border-bottom: none;
          }
        }
      }
    }
    
    .billing_buttons-container {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      flex-direction: column;

      .backButton-container {
        width: 100%;
        
        button {
          width: 100%;
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
        width: 100%;
        
        button {
          width: 100%;
          height: 64px;
          border-radius: 4px;
          font-size: 24px;
          font-weight: 400;
          background-color: #e50914;
          color: #fff;
          outline: none;
          border: none;
          cursor: pointer;

  

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