import styled from "styled-components";

export const StyledLogin = styled.div`
  width: 100vw;
  height: fit-content;
  min-height: 100vh;
  background-color: var(--primaryColorOne);
  background-image: ${props => props?.backgroundImage && `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${props.backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  pointer-events: ${props => props?.inactive ? "none" : "all"};

  .styledComponent-footer {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  }

  .login_wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    padding-top: 25px;
    padding-bottom: 150px;

    .header_container {
      width: fit-content;
      height: fit-content;
      display: flex;
      justify-content: start;
      align-items: center;
      
      .svg-container {
        width: fit-content;
        height: fit-content;
        
        svg {
          cursor: pointer;
        }
      }


      @media only screen and (max-width: 1600px) {
        width: 93.5%;
      }



      svg {
        height: 45px;
        width: 167px;
      }
    }

    .login_form-wrapper {
      width: 450px;
      height: fit-content;
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 50px;
      padding: 60px 0;
      position: relative;

      .login-form-error {
        width: 100%;
        position: absolute;
        text-align: center;
        color: var(--secondaryErrorColor);
        font-size: var(--errorFontSize);
        top: 22.5px
      }

      .login-form-success {
        width: 100%;
        position: absolute;
        text-align: center;
        color: var(--successColor);
        font-size: var(--errorFontSize);
        top: 22.5px
      }


      .login_form-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 40px;

        .header_container-phone {
          width: 75%;
          height: fit-content;
          display: flex;
          justify-content: start;
          align-items: center;
          svg {
            height: 45px;
            width: 90px;
          }

          @media (max-width: 576px) and (orientation: portrait) {
            width: 90%;
          }
        }

        .login_form-header {
          width: 75%;
          height: fit-content;
          color: var(--primaryColorOne);
          font-size: 32px;
          font-weight: 500;
          text-align: left;

          @media (max-width: 576px) and (orientation: portrait) {
            width: 90%;
          }
        }

        .login_form-inputs-container {
          width: 75%;
          height: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 30px;

          @media (max-width: 576px) and (orientation: portrait) {
            width: 90%;
          }

          .login_form-input-container {
            width: 100%;
            height: fit-content;
            position: relative;

            input {
              width: 100%;
              background: #333333;
              border-radius: 4px;
              height: 48px;
              text-indent: 16px;
              border: 1px solid transparent;
              color: var(--primaryColorOne);


              &:-webkit-autofill:focus,
              &:-webkit-autofill {
                transition: background-color 600000s 0s, color 600000s 0s;
              }

              &:hover {
                outline: none;
              }

              &:focus {
                outline: 2.2px solid var(--primaryColorOne);
                outline-offset: 2.5px;
              }
            }

            .password-show-container {
              position: absolute;
              top: 22.5%;
              right: 2.5%;
              cursor: pointer;
              width: 32.5px;
              height: 30px;
              display: flex;
              justify-content: start;
              align-items: center;
              margin-right: -12px;
              background-color: #333333;
              padding-left: 10px;

              svg {
                fill: var(--primaryColorThree);

                &:hover {
                  fill: #e87c03;
                }
              }
            }

            .error-active {
              border: 1px solid #e87c03;
            }

            .error-password-active {
              border: 1px solid #e87c03;
            }

            .error-success {
              border: 1px solid var(--successColor);
            }

            .error-password-success {
              border: 1px solid var(--successColor);
            }

            .field_error-icon-container {
              position: absolute;
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 7.5px;
              padding: 5px 0;


              .field_error-icon {
                width: fit-content;
                height: fit-content;
                display: flex;
                justify-content: center;
                align-items: center;

                svg {
                  fill: #e87c03;
                }
              }

              .field_error-content {
                color: #e87c03;
                font-size: var(--errorFontSize);
                text-align: justify;
              }
            }
          }
        }

        .login_form-button-help-container {
          width: 75%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 10px;

          @media (max-width: 576px) and (orientation: portrait) {
            width: 90%;
          }

          .login_form-button-container {
            width: 100%;

            button {
              width: 100%;
              height: 48px;
              border-radius: 4px;
              font-size: 16px;
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

          .login_form-help-wrapper {
            width: 100%;
            display: flex;
            height: fit-content;
            justify-content: space-between;
            align-items: center;

            .login_form-help-remember-login-container {
              width: fit-content;
              height: fit-content;
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 2.5px;

              input {
                accent-color: #b3b3b3;
                cursor: pointer;
                width: 14px;
                height: 14px;
              }

              label {
                color: #b3b3b3;
                font-size: 13px;
                font-weight: 400;
                width: max-content;
              }
            }

            .login_form-help-container {
              width: fit-content;
              height: fit-content;
              display: flex;
              justify-content: center;
              align-items: center;

              label {
                color: #b3b3b3;
                font-size: 13px;
                font-weight: 400;
                width: max-content;
                text-decoration: none;
                cursor: pointer;

                &:hover {
                  text-decoration: underline;
                }
              }
            }
          }

        }
      }

      .login_form-sing-up-captcha-wrapper {
        width: 75%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;

        @media (max-width: 576px) and (orientation: portrait) {
          width: 90%;
        }

        .login_form-sign-up-container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: start;
          align-items: center;
          gap: 5px;

          .login_form-sign-up-container-one {
            width: fit-content;
            height: fit-content;
            color: #737373;
            font-size: 16px;
            font-weight: 400;
            margin-top: 16px;
            text-align: left;
          }

          .login_form-sign-up-container-two {
            color: var(--primaryColorOne);
            font-size: 16px;
            font-weight: 400;
            margin-top: 16px;
            text-decoration: none;
            width: fit-content;
            height: fit-content;
            text-align: right;
            cursor: pointer;

            &:hover {
              text-decoration: underline;
            }
          }
        }

        .login_form-captcha-container {
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

          .login_form-captcha-container-one {
            width: 100%;
            height: fit-content;
            color: #8c8c8c;
            font-size: 13px;
          }

          .login_form-captcha-container-two {
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
    }
  }
`