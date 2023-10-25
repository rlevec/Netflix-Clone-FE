import styled from "styled-components";

export const StyledAccount = styled.div`
  width: 100vw;
  height: fit-content;
  background-color: white;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 75px 0;
  pointer-events: ${props => props?.inactive ? "none" : "all"};

  .form-success {
    width: 100%;
    position: absolute;
    text-align: center;
    color: var(--successColor);
    font-size: var(--errorFontSize);
    top: 22.5px
  }

  .account_wrapper {
    height: 100%;
    width: 75%;
    
    .account_header-container {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 15px;
      padding-bottom: 25px;

      .account_header-title {
        font-size: 2.15em;
        color: #333333;
        font-weight: 400;
        height: 35px;
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: 1px;
      }

      .account_header-member-since-container {
        height: 35px;
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;

        .account_header-member-since-svg-container {
          width: fit-content;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          svg {
            height: 26px;
            width: 26px;
          }
        }

        .account_header-member-since-content-one-container {
          width: fit-content;
          height: 100%;
          color: #555555;
          font-size: .8rem;
          font-weight: 700;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .account_header-member-since-content-two-container {
          width: fit-content;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;

          .account_header-member-since-paragraph-one {
            width: fit-content;
            height: 100%;
            color: #555555;
            font-size: .8rem;
            font-weight: 700;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .account_header-member-since-paragraph-two {
            width: fit-content;
            height: 100%;
            color: #555555;
            font-size: .8rem;
            font-weight: 700;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }

    .account_content-container {
      width: 100%;
      height: fit-content;

      .account_membership-billing-container {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 50px;
        border-bottom: 1px solid #999999;
        border-top: 1px solid #999999;
        padding: 25px 0;

        .account_membership-billing-title-button-container {
          height: fit-content;
          width: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-self: start;
          gap: 10px;

          .account_membership-billing-title {
            font-size: 1.125em;
            color: #737373;
            font-weight: 400;
            text-transform: uppercase;
            width: 100%;
          }

          .account_membership-billing-button {
            font-size: 13px;
            line-height: 1em;
            margin-right: 0.5em;
            height: 37px;
            width: 200px;
            padding: 12px 1em;
            background-color: #e6e6e6;
            background-image: linear-gradient(180deg, #e6e6e6, #ddd);
            box-shadow: 0 1px 0 rgba(0, 0, 0, .2);
            color: #000;
            border-radius: 2px;
            border: none;
            text-align: center;
            cursor: pointer;

            &:hover {
              background: #eaeaea;
              box-shadow: 0 1px 0 rgba(0, 0, 0, .2);
            }
          }
        }

        .account_membership-billing-readOnly-writeOnly-content-wrapper {
          width: 100%;
          height: fit-content;
          display: flex;
          justify-content: space-between;
          align-self: center;

          .account_membership-billing-readOnly-content-container {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-self: center;
            flex-direction: column;
            gap: 10px;

            .account_membership-billing-readOnly-element-container {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: start;
              align-items: center;
              gap: 5px;

              .account_membership-billing-readOnly-element-label {
                font-weight: 500;
                font-size: 1em;
                color: black;
              }

              .account_membership-billing-readOnly-element-value {
                color: #737373;
                font-size: 1em;
                font-weight: 400;
              }
            }
          }

          .account_membership-billing-writeOnly-content-container {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: end;
            flex-direction: column;
            gap: 10px;

            .account_membership-billing-writeOnly-element-label {
              color: #0073e6;
              font-size: 1em;
              font-weight: 400;
              cursor: pointer;

              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }

      .account_plan-details-container {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 50px;
        border-bottom: 1px solid #999999;
        padding: 25px 0;


        .account_plan-details-title-container {
          height: fit-content;
          width: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-self: start;
          gap: 10px;

          .account_plan-details-title {
            font-size: 1.125em;
            color: #737373;
            font-weight: 400;
            text-transform: uppercase;
            width: 100%;
          }
        }

        .account_plan-details-readOnly-writeOnly-content-wrapper {
          width: 100%;
          height: fit-content;
          display: flex;
          justify-content: space-between;
          align-self: center;

          .account_plan-details-readOnly-content-container {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-self: center;
            gap: 10px;

            .account_plan-details-readOnly-element-container {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: start;
              align-items: center;
              gap: 5px;

              .account_plan-details-readOnly-element-label {
                font-weight: 500;
                font-size: 1em;
                color: black;
              }

              .account_plan-details-readOnly-element-value {
                color: #737373;
                font-size: 1em;
                font-weight: 400;
                text-transform: capitalize;
              }
            }
          }

          .account_plan-details-writeOnly-content-container {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: end;
            align-items: center;
            gap: 10px;

            .account_plan-details-writeOnly-element-label {
              color: #0073e6;
              font-size: 1em;
              font-weight: 400;
              cursor: pointer;

              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }

      .account_parental-controls-container {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 50px;
        border-bottom: 1px solid #999999;
        padding: 25px 0;

        .account_parental-controls-title-container {
          height: fit-content;
          width: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-self: start;
          gap: 10px;

          .account_parental-controls-title {
            font-size: 1.125em;
            color: #737373;
            font-weight: 400;
            text-transform: uppercase;
            width: 100%;
          }
        }

        .account_parental-controls-content-container {
          width: 100%;
          height: fit-content;
          display: flex;
          justify-content: center;
          align-items: start;
          flex-direction: column;
        

          .account_parental-controls-single-content-container {
            width: 100%;
            height: fit-content;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid #CCCCCC;
            padding: 25px 0;
            flex-direction: column;

            &:first-child {
              border-top: none;
              padding-top: 0;
            }

            &:last-child {
              border-bottom: none;
            }
            
            .account_parental-controls-single-active-content {
              width: 100%;
            }
            
            .account_parental-controls-single-content-img-name-rating-wrapper {
              width: 100%;
              height: fit-content;
              display: flex;
              justify-content: space-between;
              align-items: center;
              cursor: pointer;
              
              .account_parental-controls-single-content-img-name-rating-container {
                width: fit-content;
                height: fit-content;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 20px;

                img {
                  border-radius: 4px;
                  height: 60px;
                }

                .account_parental-controls-single-content-name-rating-container {
                  width: fit-content;
                  height: fit-content;
                  display: flex;
                  justify-content: center;
                  align-items: start;
                  flex-direction: column;
                  gap: 10px;

                  .account_parental-controls-single-content-name-container {
                    color: #333333;
                    font-size: 1.2em;
                    font-weight: 500;
                  }

                  .account_parental-controls-single-content-amt-container {
                    color: #787878;
                    font-size: .8em;
                  }
                }
              }

              .account_parental-controls-single-content-svg-container {
                svg {
                  width: 25px;
                  height: 25px;
                  fill: #AAAAAA;
                }
              } 
            }

          }
        }
      }
    }
    
    .account_button-container {
      width: 100%;
      height: fit-content;
      padding: 25px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      
      .account_button {
        background-color: #0080ff;
        background-image: linear-gradient(180deg, #0080ff, #0277ec);
        box-shadow: 0 1px 0 rgba(0, 0, 0, .55);
        color: #fff;
        cursor: pointer;
        font-size: 20px;
        min-height: 48px;
        min-width: 112px;
        padding: 14px 2em;
        border: none;
        font-weight: 300;
        letter-spacing: 1.5px;

        &:hover {
          background: #2490fd;
          box-shadow: 0 1px 0 rgba(0, 0, 0, .55);
        }
      }
    }
    
  }
`