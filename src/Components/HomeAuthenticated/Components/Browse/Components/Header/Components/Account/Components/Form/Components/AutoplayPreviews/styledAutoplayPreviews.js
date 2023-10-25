import styled from "styled-components";

export const StyledAutoplayPreviews = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  pointer-events: ${props => props?.inactive ? "none" : "all"};

  .autoplayPreviews_wrapper {
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

    .autoplayPreviews-title-input-container {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      gap: 25px;

      .autoplayPreviews_title {
        width: fit-content;
        font-size: 32px;
        font-weight: 500;
        text-align: center;
      }

      .autoplayPreviews_input-container {
        width: fit-content;
        height: fit-content;
        position: relative;

        input {
          accent-color: var(--primaryColorTwo);
          cursor: pointer;
          width: 32px;
          height: 32px;
        }
      }
    }

    .autoplayPreviews-buttons-container {
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