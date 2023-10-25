import styled from "styled-components";

export const StyledMaturitySettings = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  pointer-events: ${props => props?.inactive ? "none" : "all"};

  .maturitySettings_wrapper {
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

    .maturitySettings_title-content-container {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .maturitySettings_title {
        width: fit-content;
        font-size: 32px;
        font-weight: 500;
        text-align: center;
      }

      .maturitySettings_custom-select-container {
        width: 50%;
        height: 50px;
        position: relative;

        .maturitySettings_custom-select-active {
          width: 100%;
          height: 100%;
          border: 1px solid var(--borderColor);
          background-color: rgb(0, 0, 0);
          color: var(--primaryColorOne);
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 30px;
          border-bottom-right-radius: ${props => props?.maturitySettingsDropdownActive ? "none" : "0.25rem"};
          border-bottom-left-radius: ${props => props?.maturitySettingsDropdownActive ? "none" : "0.25rem"};
          border-top-left-radius: var(--borderRadius);
          border-top-right-radius: var(--borderRadius);
          font-size: var(--desktopInputFontSize);
          cursor: pointer;

          .maturitySettings_custom-select-selected-maturitySettings {
            width: fit-content;
            display: flex;
            justify-content: center;
            align-items: center;
            color: rgb(255, 255, 255);
          }

          .maturitySettings_custom-select-active-svg-container {
            width: fit-content;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
              width: 15px;
              height: 15px;
              fill: rgb(255, 255, 255);
            }
          }
        }

        .maturitySettings_custom-select-dropdown {
          position: absolute;
          width: 100%;
          height: fit-content;
          background-color: rgb(0, 0, 0);
          color: rgb(255, 255, 255);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          border-bottom: 1px solid var(--borderColor);
          border-left: 1px solid var(--borderColor);
          border-right: 1px solid var(--borderColor);
          border-bottom-right-radius: var(--borderRadius);
          border-bottom-left-radius: var(--borderRadius);
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
          cursor: pointer;


          .maturitySettings_custom-select-dropdown-title-container {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 15px 0;
            height: 100%;
            border-bottom: 1px solid var(--borderColor);

            &:hover {
              background-color: var(--primaryColorTwo);
              color: var(--primaryColorThree);
            }

            &:last-child {
              border-bottom: none;
            }
          }
        }
      }
    }


    .maturitySettings-button-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2vw;
      flex-direction: row-reverse;
      transform: ${props => props?.maturitySettingsDropdownActive ? "translateY(250px)" : "translateY(0)"};

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