import styled from "styled-components";

export const StyledHoverModal = styled.div`
  width: 325px;
  height: 550px;
  background-color: var(--secondaryColorOne);
  position: absolute;
  z-index: 2;
  bottom: -125px;
  right: -75px;
  border-radius: 4px;
  border: 1px solid var(--primaryColorTwo);

  .hover_modal-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;

    .hover_modal-img-container {
      width: 100%;
      height: fit-content;

      .hover_modal-img {
        width: 100% !important;
        height: 400px !important;
        border-bottom-left-radius: none !important;
        border-bottom-right-radius: none !important;
      }
    }

    .hover_modal-content-container {
      width: 90%;
      padding: 10px 0;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 20px;

      .hover_modal-content-actions-container {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .hover_modal-content-actions {
          width: fit-content;
          height: fit-content;
          display: flex;
          justify-content: start;
          align-items: center;
          gap: 7.5px;

          .svg-play-container {
            height: fit-content;
            width: fit-content;
            padding: 7.5px;
            border-radius: 50%;
            border: 2px solid white;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            cursor: pointer;

            svg {
              width: 17.5px;
              width: 17.5px;
              fill: var(--secondaryColorOne);
            }

            &:hover {
              background-color: rgba(255, 255, 255, 0.7);
              border: 2px solid rgba(255, 255, 255, 0.7);
            }
          }

          .svg-container-active {
            height: fit-content;
            width: fit-content;
            padding: 7.5px;
            border-radius: 50%;
            border: 2px solid white;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            svg {
              width: 17.5px;
              width: 17.5px;
              fill: white;
            }

            &:hover {
              border: 2px solid rgba(200, 200, 200, 1);

              svg {
                fill: rgba(200, 200, 200, 1);
              }
            }
          }

          .svg-container {
            height: fit-content;
            width: fit-content;
            padding: 7.5px;
            border-radius: 50%;
            border: 2px solid rgba(200, 200, 200, 1);
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            svg {
              width: 17.5px;
              width: 17.5px;
              fill: rgba(200, 200, 200, 1);
            }

            &:hover {
              border: 2px solid rgba(255, 255, 255, 1);

              svg {
                fill: rgba(255, 255, 255, 1);
              }
            }
          }
        }

        .hover_modal-content-dropdown-trigger {
          width: fit-content;
          height: fit-content;
          display: flex;
          justify-content: end;
          align-items: center;
          cursor: pointer;

          .svg-container {
            height: fit-content;
            width: fit-content;
            padding: 7.5px;
            border-radius: 50%;
            border: 2px solid rgba(200, 200, 200, 1);
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
              width: 17.5px;
              width: 17.5px;
              fill: rgba(200, 200, 200, 1);
            }

            &:hover {
              border: 2px solid rgba(255, 255, 255, 1);

              svg {
                fill: rgba(255, 255, 255, 1);
              }
            }
          }
        }
      }
    }

    .hover_modal-content-semi-info-container {
      width: 100%;
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 12.5px;

      .hover_modal-content-trending {
        color: var(--successColor);
        font-weight: 500;
        width: 40px;
        font-size: 14px;
      }

      .hover_modal-content-seasons-container {
        width: fit-content;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgba(200, 200, 200, 1);
        gap: 5px;
        font-size: 14px;
      }

      .hover_modal-content-maturity-tag-container {
        color: rgba(200, 200, 200, 1);
        width: fit-content;
        padding: 0;
        margin: 0;
        border: 2px solid 1px solid rgba(200, 200, 200, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        font-size: 14px;
      }

      .hover_modal-content-runtime-container {
        width: 50px;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2.5px;

        .runtime {
          color: rgba(200, 200, 200, 1);
          font-weight: 500;
          font-size: 14px;
        }
      }

      .hover_modal-content-quality-container {
        width: 30px;
        height: fit-content;
        color: rgba(200, 200, 200, 1);
        text-align: end;
        font-weight: 500;
        font-size: 14px;
      }
    }

    .hover_modal-content-genres-container {
      width: 100%;
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 7.5px;

      .hover_modal-content-single-genre-container {
        width: fit-content;
        display: flex;
        justify-content: start;
        align-items: center;
        height: fit-content;
        gap: 7.5px;

        .genre-label {
          height: 25px;
          color: white !important;
        }

        .genre-separator {
          height: 25px;
          background-color: rgba(200, 200, 200, 1);
          width: 7.5px;
          height: 7.5px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        &:last-child {
          .genre-separator {
            display: none;
          }
        }
      }
    }
  }
`;