import styled from "styled-components";

export const StyledStepFour = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
  .step_four-wrapper {
    width: 70vw;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;



   

    .step_four-title-container {
      width: 100%;
      text-align: left;
      font-size: 32px;
      font-weight: 500;
    }

    .step_four-plan-container {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: start;
      flex-direction: column;
      gap: 25px;

  
      .step_four-single-plan-container {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 10px;

        .step_four-single-plan-checked-icon-container {
          width: fit-content;
          height: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;

          svg {
            fill: var(--primaryColorTwo);
            width: 25px;
            height: 25px;
          }
        }

        .step_four-single-plan-checked-title-container {
          font-size: 18px;
          font-weight: 300;
        }
      }
    }

    .step_four-header-container {
      width: 100%;
      display: flex;
      justify-content: end;
      align-items: center;
      gap: 75px;

   

      .step_four-header-content-container {
        background-color: var(--primaryColorTwo);
        height: 120px;
        width: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--primaryColorOne);
        font-size: 17px;
        font-weight: 500;
        cursor: pointer;
        opacity: 0.6;
      }

      .step_four-header-content-container-active {
        opacity: 1;
        background-color: var(--primaryColorTwo);
        height: 120px;
        width: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--primaryColorOne);
        font-size: 17px;
        font-weight: 500;
        cursor: pointer;
      }
    }

    .step_four-table-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 50px;
      

      .step_four-table-content-container {
        width: 100%;
        display: flex;
        justify-content: end;
        align-items: center;
        gap: 75px;
        border-bottom: 1px solid #CCCCCC;
        padding: 25px 0;
        


        &:last-child {
          .step_four-table-single-content-container {
            &:first-child {


              .step_four-table-single-text-content-container {
              }
            }
          }
        }


        .svg-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 120px;
          

          svg {
            fill: #737373;
            width: 25px;
            height: 25px;
          }
        }

        .svg-container-active {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 120px;
          

          svg {
            fill: var(--primaryColorTwo);
            width: 25px;
            height: 25px;
          }
        }

        .step_four-table-single-content-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: fit-content;

          &:first-child {
            width: 100%;
            display: flex;
            justify-content: start;
            align-items: center;


            .step_four-table-single-text-content-container {
              text-align: left;
              color: var(--primaryColorThree);
              font-weight: 400;
              width: max-content;
            }
          }

          .step_four-table-single-text-content-container {
            color: #737373;
            font-weight: 500;
            font-size: 17px;
            text-align: center;
            width: 120px;

          }

          .step_four-table-single-text-content-container-active {
            color: var(--primaryColorTwo);
            font-weight: 500;
            font-size: 17px;
            text-align: center;
            width: 120px;
          }
        }
      }
    }

    .step_four-info-contents-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 25px;

      .step_four-info-one-content-container {
        width: 100%;

        span {
          color: #737373;
          font-size: 13px;

          a {
            color: #0071eb;
            text-decoration: none;
          }
        }
      }

      .step_four-info-two-content-container {
        width: 100%;

        span {
          color: #737373;
          font-size: 13px;
        }
      }
    }
  }
`