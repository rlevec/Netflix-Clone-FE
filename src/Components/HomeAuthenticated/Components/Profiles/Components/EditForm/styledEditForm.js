import styled from "styled-components";

export const StyledEditForm = styled.div`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  background: #141414;
  padding: 100px 0;
  position: relative;
  

  .edit_form-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;

    .edit_form-title {
      font-size: 4vw;
      font-weight: 400;
      color: white;
    }

    .edit_form-form-container {
      border-bottom: 1px solid #333;
      border-top: 1px solid #333;
      width: fit-content;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 50px;
     padding: 25px 0;
      

      .edit_form-file-input-container {
        display: flex;
        align-self: start;
        position: relative;
        height: fit-content;
        width: fit-content;
        
        
        .edit_form-file-profile-image-container {
          position: relative;
          width: fit-content;
          height: fit-content;

          img {
            width: 8vw;
            height: 8vw;
          }
          
          .edit_form-file-profile-edit-btn-container {
            position: absolute;
            bottom: 15px;
            left: 15px;
            width: 30px;
            height: 30px;
            background-color: black;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 7.5px;
            cursor: pointer;
       
            
            
            svg {
              width: 25px;
              height: 25px;
              fill: white;
              
            }
          }
        }


   
        
        input {
          position: absolute;
          bottom: 15px;
          left: 15px;
          cursor: pointer;
          width: 3.25vw;
          color: transparent;

          #file-upload-button {
            cursor: pointer;
          }
          
          span {
            display: none !important;
          }
        }
      }


      .edit_form-content-container {
        width: fit-content;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        gap: 50px;
  


        .edit_form-name-input-container {
          width: fit-content;
          height: fit-content;

          input {
            background: #666666;
            border: 1px solid transparent;
            box-sizing: border-box;
            color: #ffffff;
            font-size: 1.3vw;
            height: 2em;
            padding: 0.2em 0.6em;
            text-indent: 0.1vw;
            width: 18em;

            &:focus {
              outline: 2.2px solid var(--primaryColorOne);
              outline-offset: 2.5px;
            }

            &::placeholder {
              color: #cccccc;
            }

            &:focus {
              outline: none;
            }
          }

          .error-accountName-active {
            border: 1px solid var(--errorColor);
          }
          

          .error-accountName-success {
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
                fill: var(--errorColor);
              }
            }

            .field_error-content {
              color: var(--errorColor);
              font-size: var(--errorFontSize);
              text-align: justify;
            }
          }

        }

        .edit_form-content-custom-select-container {
          width: fit-content;
          height: fit-content;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: start;
          flex-direction: column;
          gap: 25px;

          .edit_form-content-language-title {
            font-size: 1.3vw;
            color: rgb(204, 204, 204);
          }

          .edit_form-content-custom-select-active {
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

  

            .edit_form-content-custom-selected-language {
              width: 75px;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .edit_form-content-custom-select-active-svg-container {
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

          .edit_form-content-custom-select-dropdown {
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
            z-index: 2;
            top: 100%;


            .edit_form-content-custom-select-dropdown-title-container {
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

        .edit_form-content-game-handle-container {
          width: 37.5em;
          height: fit-content;
          display: flex;
          justify-content: center;
          align-items: start;
          flex-direction: column;
          gap: 25px;

          .edit_form-content-game-handle-title {
            font-size: 1.3vw;
            color: rgb(204, 204, 204);
          }

          .edit_form-content-game-handle-desc {
            font-size: 1vw;
            color: white;
            font-weight: 400;

            .edit_form-content-game-handle-modal-trigger {
              font-weight: 500;
              cursor: pointer;
              
              &:hover {
                text-decoration: underline;
              }
            }
          }

          .edit_form-content-game-handle-input-container {
            width: fit-content;
            height: fit-content;

            input {
              background: #666666;
              border: 1px solid transparent;
              box-sizing: border-box;
              color: #ffffff;
              font-size: 1.3vw;
              height: 2em;
              padding: 0.2em 0.6em;
              text-indent: 0.1vw;
              width: 18em;

              &::placeholder {
                color: #cccccc;
              }

              &:focus {
                outline: none;
              }
            }

            .error-gameName-active {
              border: 1px solid var(--errorColor);
            }


            .error-gameName-success {
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
                  fill: var(--errorColor);
                }
              }

              .field_error-content {
                color: var(--errorColor);
                font-size: var(--errorFontSize);
                text-align: justify;
              }
            }
          }
        }

        .edit_form-content-maturity-container {
          width: fit-content;
          height: fit-content;
          display: flex;
          justify-content: center;
          align-items: start;
          flex-direction: column;
          gap: 25px;
          
          .edit_form-content-maturity-title {
            font-size: 1.3vw;
            color: rgb(204, 204, 204);
          }


          .edit_form-maturity-custom-select-container {
            width: fit-content;
            height: fit-content;
            position: relative;

            .edit_form-maturity-custom-select-active {
              width: fit-content;
              height: fit-content;
              border: 1px solid var(--borderColor);
              background-color: var(--primaryColorThree);
              color: var(--primaryColorOne);
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 10px;
              padding: 7.5px 15px;
              border-bottom-right-radius: ${props => props?.maturityDropdownActive ? "none" : "0.25rem"};
              border-bottom-left-radius: ${props => props?.maturityDropdownActive ? "none" : "0.25rem"};
              border-top-left-radius: var(--borderRadius);
              border-top-right-radius: var(--borderRadius);
              font-size: var(--desktopInputFontSize);
              cursor: pointer;


              .edit_form-maturity-custom-selected-value{
                width: 150px;
                display: flex;
                justify-content: center;
                align-items: center;
              }

              .edit_form-maturity-custom-select-active-svg-container {
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

            .edit_form-maturity-custom-select-dropdown {
              position: absolute;
              width: 205px;
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
              z-index: 2;

              .edit_form-maturity-custom-select-dropdown-title-container {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 7.5px 0;
                height: 100%;
                border-bottom: 1px solid var(--borderColor);

                &:last-child {
                  border-bottom: none;
                }
              }
            }
          }
        }

        .edit_form-content-controls-container {
          width: fit-content;
          height: fit-content;
          display: flex;
          justify-content: center;
          align-items: start;
          flex-direction: column;
          gap: 25px;
          position: relative;
          z-index: 1;

          .edit_form-content-controls-title {
            font-size: 1.3vw;
            color: rgb(204, 204, 204);
          }

          .edit_form-content-controls-inputs-container {
            .checkbox-label-input-container {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: start;
              align-items: center;
              gap: 5px;
              
              input {
                border: 1px solid #333;
                border-radius: 0;
                display: inline-block;
                font-size: .8vw;
                height: 2.5em;
                position: relative;
                width: 2.5em;
                accent-color: #cccccc;
                cursor: pointer;
              }
              
              label {
                font-size: .9vw;
                color: white;
              }

            }
          }
        }
      }
    }
    
    .edit_form-buttons-container {
      display: flex;
      width: fit-content;
      height: fit-content;
      justify-content: start;
      align-items: center;
      gap: 25px;
      
      .button-save {
        background: #fff;
        border: 1px solid #fff;
        color: #000;
        font-weight: 500;
        font-size: 1.2vw;
        padding: 0.5em 1.5em;
        cursor: pointer;
        
        &:disabled {
          opacity: 0.8;
          cursor: not-allowed;
        }
        
        &:hover {
          background: #c00;
          border: 1px solid #c00;
          color: #fff;
        }
      }

      .button-cancel {
        background-color: transparent;
        border: 1px solid grey;
        color: grey;
        cursor: pointer;
        font-size: 1.2vw;
        padding: 0.5em 1.5em;
        
        &:hover {
          border: 1px solid #fff;
          color: #fff;
        }
      }

      .button-delete {
        background-color: transparent;
        border: 1px solid grey;
        color: grey;
        cursor: pointer;
        font-size: 1.2vw;
        padding: 0.5em 1.5em;

        &:hover {
          border: 1px solid #fff;
          color: #fff;
        }
      }
    }
  }
`