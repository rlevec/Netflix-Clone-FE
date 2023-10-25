import {styled} from "styled-components";

export const StyledStepFive = styled.div`
  width: 30vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  


  .step_five-content-title {
    width: 100%;
    height: 100%;
    font-size: 32px;
    text-align: center;
    font-weight: 500;
    color: var(--primaryColorThree);
    
  }

  .step_five-content-desc {
    width: 100%;
    height: 100%;
    font-size: 18px;
    text-align: center;
    font-weight: 300;
    color: var(--primaryColorThree);
    
  }

  .step_five-content-info {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    

    .step_five-info-one {
      width: 100%;
      height: 100%;
      font-size: 18px;
      text-align: center;
      font-weight: 500;
      color: var(--primaryColorThree)
    }

    .step_five-info-two {
      width: 100%;
      height: 100%;
      font-size: 18px;
      text-align: center;
      font-weight: 500;
      color: var(--primaryColorThree)
    }
  }

  .step_five-content-inputs {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 7.5px;
    

    .step_five-content-inputs-encryption-container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: end;
      align-items: center;
      gap: 5px;

      .step_five-content-inputs-encryption-container-title {
        font-size: 13px;
        font-weight: 300;
      }

      .step_five-content-inputs-encryption-container-icon {
        width: fit-content;
        height: fit-content;

        svg {
          width: 15px;
          height: 15px;
          fill: #ffd700;
        }
      }
    }

    .step_five-content-inputs-container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 15px;

      .active {
        border: 1px solid var(--successColor);
      }

      .inactive {
        border: 1px solid #333333;
      }

      .step_five-content-single-input-container {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: start;
        align-items: center;
        border-radius: 5px;
        padding: 15px;
        cursor: pointer;

        .step_five-content-single-input-images-title-container {
          width: 100%;
          height: fit-content;
          display: flex;
          justify-content: start;
          align-items: center;
          gap: 15px;

          .step_five-content-single-input-title {
            width: max-content;
            color: #333333
          }

          .step_five-content-single-input-images-wrapper {
            width: fit-content;
            height: 100%;
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 7.5px;

            .step_five-content-single-input-image-container {
              width: fit-content;
              height: fit-content;

              img {
                height: 25px;
              }
            }
          }
        }
      }
    }
  }
`