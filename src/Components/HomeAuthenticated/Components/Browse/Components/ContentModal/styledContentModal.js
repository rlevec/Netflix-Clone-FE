import styled from "styled-components";

export const StyledContentModal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5252;

  .modal-container {
    width: 70vw;
    height: 80vh;
    background-color: var(--secondaryColorFour);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: start;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 2.5px;
    }

    &::-webkit-scrollbar-track {
      background: black;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--primaryColorTwo);
    }

    .close-icon-container {
      position: absolute;
      top: 2.5vw;
      right: 2.5vw;
      cursor: pointer;
      width: fit-content;
      height: fit-content;
      background-color: var(--secondaryColorThree);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      border: 2.5px solid var(--secondaryColorOne);
      border-radius: 50%;
      z-index: 2526;

      svg {
        width: 25px;
        height: 25px;
        fill: var(--secondaryColorOne);
      }

      &:hover {
        background-color: white;
        border: 2.5px solid black;

        svg {
          fill: black;
        }
      }
    }

    .modal-content {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 25px;
      padding-bottom: 25px;

      .modal-image-container {
        width: 100%;
        height: 100%;
        position: relative;

        .modal-img-actions-container {
          position: absolute;
          bottom: 5vh;
          left: 1.25vw;
          width: 100%;
          height: fit-content;
          justify-content: center;
          align-items: start;
          flex-direction: column;
          display: flex;
          gap: 10px;

          .actions {
            width: fit-content;
            height: fit-content;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;

            .svg-play-container {
              height: fit-content;
              width: fit-content;
              padding: 5px 25px;
              border-radius: 4px;
              border: 2px solid white;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: white;
              cursor: pointer;

              svg {
                width: 25px;
                width: 17.5px;
                fill: var(--secondaryColorOne);
                cursor: pointer;
              }

              label {
                color: black;
                font-weight: 700;
                font-size: 16px;
                cursor: pointer;
              }

              &:hover {
                background-color: rgba(255, 255, 255, 0.7);
                border: 2px solid rgba(255, 255, 255, 0.7);
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
          }
        }

        img {
          width: 100%;
          height: 100%;
        }
      }

      .modal-content-info-container {
        width: 95%;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        gap: 12.5px;

        .modal-content-specs-container {
          width: 100%;
          display: flex;
          justify-content: start;
          align-items: center;
          gap: 10px;

          .modal-content-trending-container {
            font-size: 14px;
            font-weight: 500;
            color: var(--successColor);
          }

          .modal-content-production-year-container {
            color: #bcbcbc;
            font-size: 14px;
            font-weight: 500;
          }

          .modal-content-runtime-container {
            width: fit-content;
            display: flex;
            justify-content: center;
            flex-direction: row;
            align-items: center;
            gap: 2.5px;

            .modal-content-runtime {
              color: #bcbcbc;
              font-size: 14px;
              font-weight: 500;
            }
          }

          .modal-content-quality {
            color: #bcbcbc;
            font-size: 14px;
            font-weight: 500;
          }
        }

        .modal-content-maturity-container {
          width: 100%;
          display: flex;
          justify-content: start;
          align-items: center;
          gap: 10px;

          .modal-content-maturity-rating {
            color: white;
            font-size: 14px;
            font-weight: 500;
            padding: 2.5px 12.5px;
            border: 1px solid white;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .modal-content-maturity-tags-container {
            width: fit-content;
            height: fit-content;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2.5px;

            .modal-content-single-maturity-rating {
              width: fit-content;
              height: fit-content;
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 2.5px;

              .maturity-label {
                color: white;
                font-size: 14px;
                font-weight: 500;
              }

              .maturity-separator {
                color: white;
                font-size: 14px;
                font-weight: 500;
              }

              &:last-child {
                .maturity-separator {
                  display: none;
                }
              }
            }
          }
        }

        .modal-content-cast-container {
          width: fit-content;
          height: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;

          .modal-content-cast-label {
            color: #bcbcbc;
            font-size: 14px;
            font-weight: 500;
          }

          .modal-content-cast-content {
            width: fit-content;
            height: fit-content;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2.5px;

            .modal-content-cast-single-content {
              width: fit-content;
              height: fit-content;
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 2.5px;

              .label {
                color: white;
                font-size: 14px;
                font-weight: 500;
              }

              .separator {
                color: white;
                font-size: 14px;
                font-weight: 500;
              }

              &:last-child {
                .separator {
                  display: none;
                }
              }
            }
          }
        }

        .modal-content-genres-container {
          width: fit-content;
          height: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;

          .modal-content-genres-label {
            color: #bcbcbc;
            font-size: 14px;
            font-weight: 500;
          }

          .modal-content-genres-content {
            width: fit-content;
            height: fit-content;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2.5px;

            .modal-content-genres-single-content {
              width: fit-content;
              height: fit-content;
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 2.5px;

              .label {
                color: white;
                font-size: 14px;
                font-weight: 500;
              }

              .separator {
                color: white;
                font-size: 14px;
                font-weight: 500;
              }

              &:last-child {
                .separator {
                  display: none;
                }
              }
            }
          }
        }

        .modal-content-desc-container {
          color: white;
          font-size: 14px;
          font-weight: 500;
          text-align: justify;
        }
      }

      .modal-content-episodes-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 10px;

        .label {
          font-size: 24px;
          font-weight: 400;
          color: white;
          width: 95%;
          text-align: left;
        }

        .episodes-wrapper {
          width: 95%;
          height: fit-content;

          .single-ep-element-container {
            width: 100%;
            height: fit-content;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 25px 0;
            padding: 10px;
            cursor: pointer;

            &:hover {
              background-color: var(--secondaryColorThree);
              border-radius: 4px;
            }

            .ep-number {
              color: #d2d2d2;
              font-size: 1.5em;
              text-align: center;
              width: 10%;
            }

            .ep-image-info-container {
              width: 100%;
              height: fit-content;
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 10px;

              img {
                width: 150px;
                height: 150px;
                border-radius: 4px;
                aspect-ratio: 1;
              }

              .info {
                width: 100%;
                height: fit-content;
                display: flex;
                justify-content: center;
                align-items: start;
                flex-direction: column;
                gap: 10px;

                .title-runtime {
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;

                  .title {
                    font-size: 16px;
                    font-weight: 600;
                    color: white;
                  }

                  .runtime {
                    font-size: 16px;
                    font-weight: 600;
                    color: white;
                  }
                }

                .desc {
                  color: #d2d2d2;
                  font-size: 14px;
                  font-weight: 400;
                }
              }
            }
          }
        }
      }

      .modal-content-more-like-this-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 10px;

        .label {
          font-size: 24px;
          font-weight: 400;
          color: white;
          width: 95%;
          text-align: left;
        }

        .modal-content-more-like-this-wrapper {
          width: 90%;
          height: fit-content;
          display: grid;
          grid-template-columns: repeat(4, auto);
          row-gap: 30px;

          .modal-content-more-like-this-single {
            display: flex;
            width: fit-content;
            height: fit-content;
            justify-content: center;
            align-items: center;
            position: relative;

            img {
              width: auto;
              height: 300px;
            }

            .modal-img-actions-container {
              position: absolute;
              bottom: 20px;
              width: 100%;
              height: fit-content;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              display: flex;
              gap: 10px;

              .actions {
                width: fit-content;
                height: fit-content;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;

                .svg-play-container {
                  height: fit-content;
                  width: fit-content;
                  padding: 5px 25px;
                  border-radius: 4px;
                  border: 2px solid white;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  background-color: white;
                  cursor: pointer;

                  svg {
                    width: 25px;
                    width: 17.5px;
                    fill: var(--secondaryColorOne);
                    cursor: pointer;
                  }

                  label {
                    color: black;
                    font-weight: 700;
                    font-size: 16px;
                    cursor: pointer;
                  }

                  &:hover {
                    background-color: rgba(255, 255, 255, 0.7);
                    border: 2px solid rgba(255, 255, 255, 0.7);
                  }
                }

                .svg-container {
                  height: fit-content;
                  width: fit-content;
                  padding: 5px 25px;
                  border-radius: 4px;
                  border: 2px solid white;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  background-color: white;
                  cursor: pointer;

                  svg {
                    width: 25px;
                    width: 17.5px;
                    fill: var(--secondaryColorOne);
                    cursor: pointer;
                  }
                  &:hover {
                    background-color: rgba(255, 255, 255, 0.7);
                    border: 2px solid rgba(255, 255, 255, 0.7);
                  }
                }

                .svg-container-active {
                  height: fit-content;
                  width: fit-content;
                  padding: 5px 25px;
                  border-radius: 4px;
                  border: 2px solid white;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  background-color: white;
                  cursor: pointer;

                  svg {
                    width: 25px;
                    width: 17.5px;
                    fill: var(--secondaryColorOne);
                    cursor: pointer;
                  }
                  &:hover {
                    background-color: rgba(255, 255, 255, 0.7);
                    border: 2px solid rgba(255, 255, 255, 0.7);
                  }
                }
              }
            }
          }
        }
      }

      .modal-content-about-this-container {
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        gap: 10px;

        .header {
          width: 100%;
          display: flex;
          justify-content: start;
          align-items: center;
          gap: 5px;

          .header-info {
            font-size: 24px;
            font-weight: 400;
            color: white;
          }

          .header-label {
            font-size: 24px;
            font-weight: 600;
            color: white;
          }
        }

        .info {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: start;
          flex-direction: column;
          gap: 5px;

          .director {
            width: 100%;
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 5px;

            .label {
              font-size: 16px;
              font-weight: 600;
              color: var(--secondaryColorThree);
            }
            .value {
              font-size: 14px;
              color: white;
              font-weight: 400;
            }
          }

          .writers {
            width: 100%;
            height: fit-content;
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 5px;

            .label {
              font-size: 16px;
              font-weight: 600;
              color: var(--secondaryColorThree);
            }

            .values-container {
              width: fit-content;
              height: fit-content;
              display: flex;
              justify-content: start;
              align-items: center;
              gap: 5px;

              .single-value-container {
                width: fit-content;
                height: fit-content;
                display: flex;
                justify-content: start;
                align-items: center;
                gap: 5px;

                .value {
                  font-size: 14px;
                  color: white;
                  font-weight: 400;
                }

                .separator {
                  font-size: 14px;
                  color: white;
                  font-weight: 400;
                }

                &:last-child {
                  .separator {
                    display: none;
                  }
                }
              }
            }
          }

          .genres {
            width: 100%;
            height: fit-content;
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 5px;

            .label {
              font-size: 16px;
              font-weight: 600;
              color: var(--secondaryColorThree);
            }

            .values-container {
              width: fit-content;
              height: fit-content;
              display: flex;
              justify-content: start;
              align-items: center;
              gap: 5px;

              .single-value-container {
                width: fit-content;
                height: fit-content;
                display: flex;
                justify-content: start;
                align-items: center;
                gap: 5px;

                .value {
                  font-size: 14px;
                  color: white;
                  font-weight: 400;
                }

                .separator {
                  font-size: 14px;
                  color: white;
                  font-weight: 400;
                }

                &:last-child {
                  .separator {
                    display: none;
                  }
                }
              }
            }
          }

          .tags {
            width: 100%;
            height: fit-content;
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 5px;

            .label {
              font-size: 16px;
              font-weight: 600;
              color: var(--secondaryColorThree);
            }

            .values-container {
              width: fit-content;
              height: fit-content;
              display: flex;
              justify-content: start;
              align-items: center;
              gap: 5px;

              .single-value-container {
                width: fit-content;
                height: fit-content;
                display: flex;
                justify-content: start;
                align-items: center;
                gap: 5px;

                .value {
                  font-size: 14px;
                  color: white;
                  font-weight: 400;
                }

                .separator {
                  font-size: 14px;
                  color: white;
                  font-weight: 400;
                }

                &:last-child {
                  .separator {
                    display: none;
                  }
                }
              }
            }
          }

          .maturity {
            width: 100%;
            height: fit-content;
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 5px;

            .label {
              font-size: 16px;
              font-weight: 600;
              color: var(--secondaryColorThree);
            }

            .maturity-value {
              color: var(--secondaryColorThree);
              font-size: 14px;
              font-weight: 500;
              padding: 2.5px 12.5px;
              border: 1px solid var(--secondaryColorThree);
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .values-container {
              width: fit-content;
              height: fit-content;
              display: flex;
              justify-content: start;
              align-items: center;
              gap: 5px;

              .single-value-container {
                width: fit-content;
                height: fit-content;
                display: flex;
                justify-content: start;
                align-items: center;
                gap: 5px;

                .value {
                  font-size: 14px;
                  color: white;
                  font-weight: 400;
                }

                .separator {
                  font-size: 14px;
                  color: white;
                  font-weight: 400;
                }

                &:last-child {
                  .separator {
                    display: none;
                  }
                }
              }
            }

            .recommended {
              font-size: 14px;
              color: white;
              font-weight: 400;
            }
          }
        }
      }
    }
  }
`;
