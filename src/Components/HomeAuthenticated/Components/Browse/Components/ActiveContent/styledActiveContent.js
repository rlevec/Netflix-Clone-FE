import styled from "styled-components";

export const StyledActiveContent = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;

  .emtpy-list-warning-container {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;

    .emtpy-list-warning-title {
      color: var(--primaryColorTwo);
      font-size: 3.5vw;
      font-weight: 600;
      text-align: center;
      text-shadow: 2.5px 2.5px var(--secondaryColorThree);
    }

    .emtpy-list-warning-desc {
      color: var(--primaryColorTwo);
      font-size: 1.5vw;
      width: 50%;
      font-weight: 500;
      text-align: center;
    }
  }

  .active_content-img-video-container {
    width: 100%;
    height: fit-content;

    display: flex;
    justify-content: center;
    align-items: center;

    .active_content-image-container {
      width: fit-content;
      height: fit-content;
      position: relative;

      img {
        width: 100vw;
        height: 100vh;
      }

      video {
        width: 100vw;
        height: 100vh;
      }

      .maturity-rating-container {
        position: absolute;
        right: 0;
        background-color: rgba(51, 51, 51, 0.6);
        color: white;
        border: 3px #dcdcdc;
        border-left-style: solid;
        font-size: 1.1vw;
        height: 2.4vw;
        padding: 0.5vw 3.5vw 0.5vw 0.8vw;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 15.5vh;
      }

      .active_content-info-container {
        position: absolute;
        bottom: 12.5vh;
        left: 5vw;

        .content-wrapper {
          width: 100%;
          height: fit-content;
          display: flex;
          justify-content: center;
          align-items: start;
          flex-direction: column;
          gap: 25px;

          .active_content-info-title {
            font-size: 3.6vw;
            font-weight: 700;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
            color: white;
            width: 35vw;
            padding: 0;
            margin: 0;
            height: fit-content;
          }

          .active_content-info-desc {
            font-size: 1.2vw;
            font-weight: 400;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
            color: white;
            width: 35vw;
          }

          .active_content-buttons-container {
            width: fit-content;
            height: fit-content;
            display: flex;
            justify-content: start;
            align-items: center;
            flex-direction: row;
            gap: 10px;

            .play-button {
              width: fit-content;
              height: fit-content;

              button {
                background-color: rgba(255, 255, 255, 1);
                border-radius: 4px;
                padding: 7.5px 25px;
                border: none;
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;

                &:hover {
                  background-color: rgba(255, 255, 255, 0.85);
                }

                .button-label {
                  color: black;
                  font-size: 1.2vw;
                  font-weight: 600;
                }

                .button-icon-container {
                  width: fit-content;
                  height: fit-content;

                  svg {
                    width: 25px;
                    height: 25px;
                    fill: black;
                  }
                }
              }
            }

            .info-button {
              width: fit-content;
              height: fit-content;

              button {
                background-color: rgba(109, 109, 110, 1);
                border-radius: 4px;
                padding: 7.5px 25px;
                border: none;
                cursor: pointer;
                display: flex;
                gap: 10px;
                justify-content: center;
                align-items: center;

                &:hover {
                  background-color: rgba(109, 109, 110, 0.85);
                }

                .button-label {
                  font-size: 1.2vw;
                  font-weight: 600;
                  color: white;
                }

                .button-icon-container {
                  width: fit-content;
                  height: fit-content;

                  svg {
                    width: 25px;
                    height: 25px;
                    fill: white;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .active_content-grid-container {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
