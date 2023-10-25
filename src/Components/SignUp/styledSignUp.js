import styled from "styled-components";

export const StyledSignUp = styled.div`
  width: 100vw;
  height: fit-content;
  min-height: 100vh;
  background-color: var(--primaryColorOne);


  .styledComponent-footer {
    .footer_wrapper {
      width: 71.5%;


      @media only screen and (max-width: 1600px) {
        width: 91.5%;
      }
    }
  }
  

  .signUp_header-wrapper {
    height: fit-content;
    border-bottom: 1px solid var(--borderBottomSignUpHeader);
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 62.5%;
    align-items: center;
    padding: 15px 0;
    
  

  .logo-icon-container {
    width: fit-content;
    height: fit-content;
    cursor: pointer;

    svg {
      width: 160px;
      height: 55px;
      
    }
  }
    

  .signUp_header-button-container {
    width: fit-content;
    height: fit-content;

    button {
      border: none;
      background-color: unset;
      color: var(--buttonAuthSignUpColor);
      font-size: 19px;
      font-weight: 500;
      cursor: pointer;
      

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.signUp_content-wrapper {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 100px 0;
  gap: 35px;
  min-height: 100vh;
  
  

  .signUp_step-container {
    width: 30vw;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    

    .signUp_step-text {
      font-weight: 400;
    }

    .signUp_step-number {
      font-weight: 600;
    }
  }

  .signUp_step-content {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;

    .signUp_step-content-wrapper {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;

      .signUp_step-content-container {
        width: 30vw;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 15px;

   


        .signUp_step-content-img-container {
          width: 25vw;

          img {
            width: 100%;
          }
        }

        .signUp_step-content-title {
          font-size: 32px;
          font-weight: 500;
          text-align: center;
        }


        .signUp_step-content-desc-container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 2.5px;

          .signUp_step-content-desc {
            font-size: 18px;
            font-weight: 300;
            text-align: center;
          }

          .signUp_step-content-desc-sec {
            font-size: 18px;
            font-weight: 300;
            text-align: center;
          }
        }
      }
    }
  }

  .signUp_step-navigation-wrapper-primary {
    width: 30vw;
    
    .buttons-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      gap: 25px;

      .previousButton-container {
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

      .nextButton-container {
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

        }
      }
    }
  }

  .signUp_step-navigation-wrapper-secondary {
    width: 30vw;
    
    
    .buttons-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      gap: 2vw;

      .previousButton-container {
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

      .nextButton-container {
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

}
`