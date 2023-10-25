import {styled} from "styled-components";

export const StyledForgotEmailPassword = styled.div`
  width: 100%;
  background-image: ${props => props?.backgroundImage && `url(${props.backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 175px;
  pointer-events: ${props => props?.inactive ? "none" : "all"};


  .styledComponents-header {
    gap: 47%;

    @media only screen and (max-width: 1600px) {
      gap: 65.5%;
    }
    


    
    .header_custom-select-sign-in-container {
      .header_custom-select-container {
        .header_custom-select-active {
        }
     
        .header_custom-select-dropdown {
       
        }
      }
    }

  }
  
  .forgot_email_password-wrapper {
    height: fit-content;
    width: fit-content;
    max-width: 15vw;
    min-width: 380px;
    padding: 40px;
    background-color: #f3f3f3;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 25px;
    position: relative;



    .styledComponents-header {
   
    }

    .forgot_email_password-form-error {
      width: 100%;
      position: absolute;
      text-align: center;
      color: var(--secondaryErrorColor);
      font-size: var(--errorFontSize);
      top: 17.5px
    }
    
    .forgot_email_password-form-success {
      width: 100%;
      position: absolute;
      text-align: center;
      color: var(--successColor);
      font-size: var(--errorFontSize);
      top: 17.5px
    }

    
    .forgot_email_password-header-title-container {
      width: 100%;
      font-size: 2em;
      font-weight: 500;
      color: var(--primaryColorThree);
      text-align: left;

    
    }
    
    .forgot_email_password-form-container {
      width: 100%;
      height: fit-content;

      
    }

    .forgot_email_password-captcha-container {
      width: fit-content;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 20px;

    
      
      .login_form-captcha-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .forgot_email_password-captcha-container-one {
        width: 100%;
        height: fit-content;
        color: #8c8c8c;
        font-size: 13px;
      }
      
      .forgot_email_password-captcha-container-two {
        width: 100%;
        height: fit-content;
        color: #8c8c8c;
        font-size: 13px;

        a {
          color: #0080ff;
          text-decoration: none;
          cursor: pointer;
        }
      }
    }
  }
  

  .styledComponent-footer {
    background: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) );
    

    
    .footer_wrapper {
    
      
      .footer_custom-select-container {
        .footer_custom-select-active {
        
        }
      }

      .footer_custom-select-dropdown {
      }
      
      .footer_questions-container {
    
      }
      
   
      
      .footer_content-container {
        .footer_content-single-element-container {
          .footer_content-single-element {
          
          }
        }
      }
      
      .footer_country-origin {
     
      }
      
    }
    
  }
`