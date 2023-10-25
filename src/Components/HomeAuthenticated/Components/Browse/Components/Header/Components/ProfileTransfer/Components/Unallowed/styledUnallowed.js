import styled from "styled-components";

export const StyledUnallowed = styled.div`
  width: 100vw;
  height: fit-content;
  min-height: 100vh;
  background-color: #000;
  background-image: radial-gradient(circle at 0 0, #000 0, #250c24 33%, #2a0d24 61%, #721d26 100%);
  display: flex;
  justify-content: center;
  align-items: center;

  .profile_transfer-unallowed-wrapper {
    width: 30vw;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 25px;

    .profile_transfer-unallowed-wrapper-header {
      font-size: 2.25em;
      font-weight: 700;
      color: white;
    }

    .profile_transfer-unallowed-wrapper-content {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: start;
      flex-direction: column;
      gap: 25px;

      .profile_transfer-unallowed-wrapper-single-content {
        display: flex;
        justify-content: start;
        align-items: center;
        height: fit-content;
        width: 100%;
        gap: 12.5px;

        .profile_transfer-unallowed-wrapper-single-content-svg-container {
          width: fit-content;
          height: 100%;
          align-self: start;

          svg {
            width: 25px;
            height: 25px;
            fill: var(--errorColor);
          }
        }

        .profile_transfer-unallowed-wrapper-single-content-desc {
          font-size: 18px;
          color: white;
          font-weight: 400;
        }
      }
    }

    .profile_transfer-unallowed-wrapper-buttons {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      gap: 25px;

      .submitButton-container {
        width: 100%;

        button {
          width: 100%;
          height: 44px;
          border-radius: 4px;
          font-size: 16px;
          background-color: white;
          outline: none;
          border: none;
          cursor: pointer;
          box-shadow: 0 1px 1px rgba(0, 0, 0, .25);
          box-sizing: border-box;
          color: #000;
          display: inline-block;
          font-weight: 500;
          letter-spacing: .025rem;
          line-height: 1rem;
          text-align: center;

          &:hover {
            background-color: #d9d9d9;
          }
        }
      }

      .backButton-container {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: start;
        align-items: center;

        button {
          background-color: transparent;
          border-radius: 2px;
          font-size: 16px;
          width: 100%;
          height: 44px;
          border: 1px solid #e50914;
          font-weight: 400;
          color: #fff;
          outline: none;
          cursor: pointer;
        }
      }
    }
  }
`