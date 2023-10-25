import styled from "styled-components";

export const StyledGameHandleInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 400px;
  z-index: 3;
  font-size: 16px;
  max-width: 342px;
  border-radius: 8px;
  padding: 60px 24px 32px;
  text-align: center;
  background: linear-gradient(45.55deg, rgba(0, 0, 0, 0.1) -8.16%, rgb(0, 0, 0) 32.09%, rgb(0, 0, 0) 69.6%, rgba(0, 0, 0, 0.1) 107.2%), linear-gradient(270deg, rgb(229, 9, 20) 5.35%, rgba(129, 43, 239, 0.75) 37.52%, rgba(129, 43, 239, 0.75) 55.93%, rgb(229, 15, 9) 93.15%), rgb(0, 0, 0);

  .gameHandleInfo_wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    position: relative;
    
    .gameHandleInfo_close-icon-container {
      position: absolute;
      right: 0;
      top: -8.5%;
      cursor: pointer;
      height: fit-content;
      width: fit-content;
      
      svg {
        fill: white;
        width: 25px;
        height: 25px;
        background-color: rgba(109, 109, 110, 0.7);
        padding: 5px;
        border-radius: 50%;
      }
    }

    .gameHandleInfo_buttons-fill-wrapper {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;

      .gameHandleInfo_buttons-fill-container {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 7.5px;

        .gameHandleInfo_fill-mark-container {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 7.5px;

          .inactive-fill {
            width: 7.5px;
            height: 7.5px;
            background-color: rgba(255, 255, 255, 0.7);
            border-radius: 50%;
          }

          .active-fill {
            width: 7.5px;
            height: 7.5px;
            background-color: white;
            border-radius: 50%;
          }
        }

        .gameHandleInfo_buttons-container {
          width: 100%;
          height: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
          gap: 50px;

          .button-next {
            appearance: none;
            border: 0;
            border-radius: 4px;
            cursor: pointer;
            min-height: 2.5em;
            width: 7em;
            background-color: white;
            color: black;
            font-weight: 600;
            font-size: 1em;
            line-height: 1;

            &:hover {
              background-color: rgba(255, 255, 255, 0.75);
            }
          }

          .button-back {
            border: none;
            border-radius: 4px;
            cursor: pointer;
            min-height: 2.5em;
            width: 7em;
            font-weight: 600;
            font-size: 1em;
            line-height: 1;
            background-color: rgba(109, 109, 110, 0.7);
            color: white;

            &:hover {
              background-color: rgba(109, 109, 110, 0.4);
            }
          }

          .button-done {
            appearance: none;
            border: 0;
            border-radius: 4px;
            cursor: pointer;
            min-height: 2.5em;
            width: 7em;
            background-color: white;
            color: black;
            font-weight: 600;
            font-size: 1em;
            line-height: 1;

            &:hover {
              background-color: rgba(255, 255, 255, 0.75);
            }
          }
        }
      }
    }

    .gameHandleInfo_content-container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .gameHandleInfo_content-step_1-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        gap: 25px;

        .gameHandleInfo_content-step-1-image-container {
          width: 100%;
          height: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            border-radius: 4px;
            height: 7em;
            max-height: 180px;
            max-width: 180px;
            min-height: 80px;
            min-width: 80px;
            width: 7em;
          }
        }

        .gameHandleInfo_content-step-1-name-game-name-container {
          width: fit-content;
          height: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          .gameHandleInfo_content-step-1-name {
            font-size: 1em;
            text-align: center;
            color: white;
            font-weight: 400;
          }

          .gameHandleInfo_content-step-1-game-name-svg-container {
            width: 100%;
            height: fit-content;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5px;

            .gameHandleInfo_content-step-1-game-name-container {
              font-size: 0.875em;
              color: #A0A0A0;
            }

            .gameHandleInfo_content-step-1-svg-container {
              width: fit-content;
              height: fit-content;

              svg {
                width: 25px !important;
                height: 25px !important;
                fill: #A0A0A0 !important;

                path {
                  stroke: #A0A0A0 !important;
                }
              }
            }
          }
        }


        .gameHandleInfo_content-step-1-header-desc-container {
          width: 100%;
          height: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 10px;

          .gameHandleInfo_content-step-1-header {
            font-size: 1.5em;
            color: white;
            font-weight: 500;
          }

          .gameHandleInfo_content-step-1-desc {
            font-size: 1em;
            line-height: 1.5;
            color: white;
            font-weight: 300;
          }
        }
      }

      .gameHandleInfo_content-step-2-container {
        height: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        gap: 25px;

        .gameHandleInfo_content-step-2-content-container {
          width: 100%;
          height: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 5px;

          .gameHandleInfo_content-step-2-content {
            border-radius: 8px;
            position: relative;
            background-color: rgb(15, 15, 15);
            font-size: 0.875em;
            line-height: 1.5;
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: white;
            min-width: 11em;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 60%;
            padding: 8px 16px;

            .gameHandleInfo_content-step-2-content-svg-container {
              height: 100%;
              width: fit-content;
              display: flex;
              justify-content: center;
              align-items: center;

              svg {
                width: 25px !important;
                height: 25px !important;
                fill: #A0A0A0 !important;

                path {
                  stroke: #A0A0A0 !important;
                }
              }
            }

            .gameHandleInfo_content-step-2-content-label {
              font-size: 1em;
              color: white;
              font-weight: 300;
              width: 150px;
            }
          }
        }

        .gameHandleInfo_content-step_2-header-desc-container {
          width: 100%;
          height: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 10px;

          .gameHandleInfo_content-step_2-header {
            font-size: 1.5em;
            color: white;
            font-weight: 500;
          }

          .gameHandleInfo_content-step_2-desc {
            font-size: 1em;
            line-height: 1.5;
            color: white;
            font-weight: 300;
          }
        }
      }
      
      .gameHandleInfo_content-step-3-container {
        height: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        gap: 25px;
        
        .gameHandleInfo_content-step-3-content-container {
          width: 100%;
          height: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 5px;
          
          .gameHandleInfo_content-step-3-content {
            border-radius: 8px;
            position: relative;
            background-color: rgb(15, 15, 15);
            font-size: 0.875em;
            line-height: 1.5;
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 35%;
            padding: 8px 16px;
            
            
            .gameHandleInfo_content-step-3-content-svg-container-awardOne {
              width: fit-content;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;

              svg {
                width: 25px;
                height: 25px;
                fill: #FFD700;
              }
            }

            .gameHandleInfo_content-step-3-content-svg-container-awardTwo {
              width: fit-content;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;

              svg {
                width: 25px;
                height: 25px;
                fill: #C0C0C0;
              }
            }

            .gameHandleInfo_content-step-3-content-svg-container-awardThree {
              width: fit-content;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;

              svg {
                width: 25px;
                height: 25px;
                fill: #cd7f32;
              }
            }
            
            .gameHandleInfo_content-step-3-content-label {
              font-size: 1em;
              color: white;
              font-weight: 300;
              width: 75px;
            }
          }
        }

        .gameHandleInfo_content-step_3-header-desc-container {
          width: 100%;
          height: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 10px;

          .gameHandleInfo_content-step_3-header {
            font-size: 1.5em;
            color: white;
            font-weight: 500;
          }

          .gameHandleInfo_content-step_3-desc {
            font-size: 1em;
            line-height: 1.5;
            color: white;
            font-weight: 300;
          }
        }
      }
    }
  }
`