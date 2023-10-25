import styled from "styled-components";

export const StyledCardNumber = styled.div`
  width: 100vw;
  height: fit-content;
  min-height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  
  .account_card-number-wrapper {
    width: 30vw;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;


    
    .account_card-number-title {
      width: 100%;
      font-size: 32px;
      font-weight: 500;
      text-align: center;
    }
    

    .account_card-number-inputs {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 7.5px;

  

      .account_card-number-inputs-container {
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

        .account_card-number-single-input-container {
          width: 100%;
          height: fit-content;
          display: flex;
          justify-content: start;
          align-items: center;
          border-radius: 5px;
          padding: 15px 0;
          text-indent: 15px;
          cursor: pointer;

          .account_card-number-single-input-images-title-container {
            width: 100%;
            height: fit-content;
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 15px;

            .account_card-number-single-input-title {
              width: max-content;
              color: #333333
            }

            .account_card-number-single-input-images-wrapper {
              width: fit-content;
              height: 100%;
              display: flex;
              justify-content: start;
              align-items: center;
              gap: 7.5px;

              .account_card-number-single-input-image-container {
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

    .account_card-number-buttons-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2vw;
      flex-direction: row-reverse;

      .backButton-container {
        button {
          width: 14vw;
          height: 64px;
          border-radius: 4px;
          font-size: 24px;
          font-weight: 400;
          background-color: var(--secondaryColorTwo);
          color: #fff;
          outline: none;
          border: none;
          cursor: pointer;

      

          &:hover {
            background-color: var(--secondaryColorThree);
          }
        }
      }

      .nextButton-container {
        button {
          width: 14vw;
          height: 64px;
          border-radius: 4px;
          font-size: 24px;
          font-weight: 400;
          background-color: #e50914;
          color: #fff;
          outline: none;
          border: none;
          cursor: pointer;

          @media (max-width: 576px) and (orientation: portrait) {
            width: 27.5vw;
          }

          &:hover {
            background-color: #f6121d;
          }

          &:disabled {
            opacity: 0.8;
            cursor: not-allowed;
          }

        }
      }
    }
  }
`