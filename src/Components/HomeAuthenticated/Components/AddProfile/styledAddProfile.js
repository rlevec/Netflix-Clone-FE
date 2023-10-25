import styled from "styled-components";

export const StyledAddProfile = styled.div`
  height: 100%;
  width: 100%;
  background: #141414;

  .addProfile_wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    position: relative;

    .addProfile_title-info-container {
      width: fit-content;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .addProfile_title {
        color: var(--primaryColorOne);
        font-size: 3.5vw;
        font-weight: unset;
        width: 100%;
        text-align: left;
      }

      .addProfile_info {
        color: #666666;
        font-size: 1.3vw;
        text-align: left;
        width: 100%;
      }
    }


    .addProfile_image-inputs-container {
      width: fit-content;
      height: fit-content;
      border-bottom: 1px solid #333;
      border-top: 1px solid #333;
      padding: 2em 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.5vw;

      .addProfile_image-container {
        max-width: 180px;
        min-width: 80px;
        white-space: nowrap;
        width: 8vw;

        img {
          width: 100%;
          height: 100%;
          border-radius: 4px;
        }

        svg {
          width: 100%;
          height: 100%;
          border-radius: 4px;
        }

      }

      .addProfile_input-container {
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
            outline: 2.2px solid var(--primaryColorOne);
            outline-offset: 2.5px;
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

      .addProfile_checkbox-container {
        width: fit-content;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.25vw;
        position: relative;

        .addProfile_checkbox-warning-container {
          position: absolute;
          bottom: 3em;
          font-size: 1vw;
          left: -6em;
          text-align: center;
          transition: opacity .3s linear 50ms, z-index 1ms linear .35s;
          width: 18em;
          z-index: 2;

          .addProfile_checkbox-warning-content {
            background: #fff;
            padding: 0.8em;
            color: #000;
          }

          .addProfile_pointer-container {
            width: 18em;
            height: 25px;
            display: flex;
            justify-content: center;
            align-items: center;

            .addProfile_pointer {
              margin:auto;
              width: 0;
              height: 0;
              border-top: 25px solid #FFFFFF;
              border-left: 20px solid transparent;
              border-right: 20px solid transparent;
            }
          }
        }

        input {
          border: 1px solid #333;
          border-radius: 0;
          display: inline-block;
          font-size: .8vw;
          height: 2.5em;
          position: relative;
          width: 2.5em;
          accent-color: #666666;
          cursor: pointer;
        }

        label {
          font-size: 1.3vw;
          font-weight: 400;
          color: var(--primaryColorOne);
        }
      }

    }

    .addProfile_buttons-container {
      width: fit-content;
      height: fit-content;
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 0.75vw;

      .addProfile_continue-button {
        background: #fff;
        border: 1px solid #ffffff;
        color: #000000;
        font-weight: 500;
        cursor: pointer;
        font-size: 1.2vw;
        padding: 0.5em 1.5em;
        letter-spacing: 2px;

        &:hover {
          background: #c00;
          border: 1px solid #c00;
          color: #fff;
        }
        
        &:disabled {
          opacity: 0.8;
          cursor: not-allowed;
        }
      }

      .addProfile_cancel-button {
        background-color: transparent;
        border: 1px solid grey;
        color: grey;
        cursor: pointer;
        font-weight: 500;
        font-size: 1.2vw;
        letter-spacing: 2px;
        padding: 0.5em 1.5em;

        &:hover {
          border: 1px solid #fff;
          color: #fff;
        }
      }
    }

  }
`