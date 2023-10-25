import styled from "styled-components";

export const StyledAllowedSignIn = styled.div`
  width: 100vw;
  height: fit-content;
  min-height: 100vh;
  background-color: var(--primaryColorOne);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  
  .allowed_wrapper {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 35px;
  }
  
  .allowed_step-content-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .allowed_buttons-container {
    width: 30vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 25px;

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
        
        &:disabled {
          opacity: 0.8;
          cursor: not-allowed;
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

        &:disabled {
          opacity: 0.8;
          cursor: not-allowed;
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
        background-color: #0080ff;
        color: #ffffff;
        outline: none;
        border: none;
        cursor: pointer;

        &:hover {
          background-color: #6699CC;
        }

        &:disabled {
          opacity: 0.8;
          cursor: not-allowed;
        }

      }
    }
  }
`