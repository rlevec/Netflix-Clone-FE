import styled from "styled-components";

export const StyledFooter = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 75px 0;
  background-color: ${props => props?.signupRouteActive ? "rgb(243, 243, 243)" : "rgb(0,0,0)"};

  .footer_wrapper {
    width: 62.5%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 30px;

    @media only screen and (max-width: 1600px) {
      width: 93.5%;
    }
    
    


    .footer_questions-container {
      width: 100%;
      height: fit-content;
      font-size: var(--footerFontSizePrimary);
      font-weight: var(--footerFontWeight);
      color: ${props => props?.signupRouteActive ? "rgb(115, 115, 115)" : "rgba(255,255,255,0.7)"};
      text-decoration: underline;
      cursor: pointer;
    }

    .footer_content-container {
      width: 100%;
      height: fit-content;
      font-size: var(--footerFontSizeSecondary);
      font-weight: var(--footerFontWeight);
      color: var(--footerFontColor);
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      row-gap: 15px;



      .footer_content-single-element-container {

        .footer_content-single-element {
          text-decoration: ${props => props?.signupRouteActive ? "none" : "underline"};
          color: ${props => props?.signupRouteActive ? "rgb(115, 115, 115)" : "rgba(255,255,255,0.7)"};
          cursor: pointer;
          
          &:hover {
            text-decoration: ${props => props?.signupRouteActive && "underline"};
          }
        }
      }
    }

    .footer_custom-select-container {
      width: fit-content;
      height: fit-content;
      position: relative;

      .footer_custom-select-active {
        width: 110px;
        height: fit-content;
        border: 1px solid var(--borderColor);
        background-color: ${props => props?.signupRouteActive ? "rgb(255, 255, 255)" : "rgba(0,0,0)"};
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

        .footer_custom-select-selected-language {
          width: 75px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: ${props => props?.signupRouteActive ? "rgb(115, 115, 115)" : "rgba(255,255,255)"};
        }

        .footer_custom-select-active-svg-container {
          width: fit-content;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          svg {
            width: 15px;
            height: 15px;
            fill: ${props => props?.signupRouteActive ? "rgb(115, 115, 115)" : "rgba(255,255,255)"};
          }
        }
      }

      .footer_custom-select-dropdown {
        position: absolute;
        width: 140px;
        height: fit-content;
        background-color: ${props => props?.signupRouteActive ? "rgb(255, 255, 255)" : "rgba(0,0,0)"};
        color: ${props => props?.signupRouteActive ? "rgb(115, 115, 115)" : "rgba(255,255,255)"};
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


        .footer_custom-select-dropdown-title-container {
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


    .footer_country-origin {
      width: 100%;
      height: fit-content;
      font-size: var(--footerFontSizePrimary);
      font-weight: var(--footerFontWeight);
      color: ${props => props?.signupRouteActive ? "rgb(115, 115, 115)" : "rgba(255,255,255,0.7)"};
    }

  }

`