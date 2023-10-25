import {styled} from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50%;


  .header_logo-container {

    svg {
      width: 150px;
      height: 75px;

    
    }
  }

  .header_custom-select-sign-in-container {
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    


    .header_sign-in-container {
      width: fit-content;
      height: fit-content;


      button {
        width: 80px;
        height: 35px;
        padding: 7.5px 15px;
        text-align: center;
        font-size: var(--desktopSignInButtonFontSize);
        font-weight: var(--buttonFontWeight);
        border-radius: var(--borderRadius);
        border: none;
        background-color: var(--primaryColorTwo);
        color: var(--primaryColorOne);
        cursor: pointer;
        transition: background-color 0.5s;

        &:hover {
          background-color: var(--buttonHoverBackgroundColor);
        }
      }

    }

    .header_custom-select-container {
      width: fit-content;
      height: fit-content;
      position: relative;

      .header_custom-select-active {
        width: 110px;
        height: fit-content;
        border: 1px solid var(--borderColor);
        background-color: var(--primaryColorThree);
        color: var(--primaryColorOne);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding: 7.5px 15px;
        border-bottom-right-radius: ${props => props?.languageDropdownActive ? "none" : "0.25rem"};
        border-bottom-left-radius: ${props => props?.languageDropdownActive ? "none" : "0.25rem"};
        border-top-left-radius: var(--borderRadius);
        border-top-right-radius: var(--borderRadius);
        font-size: var(--desktopInputFontSize);
        cursor: pointer;
        

        .header_custom-selected-language {
          width: 75px;
          display: flex;
          justify-content: center;
          align-items: center;
          
        }

        .header_custom-select-active-svg-container {
          width: fit-content;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          svg {
            width: 15px;
            height: 15px;
            fill: var(--primaryColorOne);
          }
        }
      }

      .header_custom-select-dropdown {
        position: absolute;
        width: 140px;
        height: fit-content;
        background-color: var(--primaryColorThree);
        color: var(--primaryColorOne);
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
        


        .header_custom-select-dropdown-title-container {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 7.5px 0;
          height: 100%;

          &:first-child {
            border-bottom: 1px solid var(--borderColor);
          }
        }
      }
    }
  }
`