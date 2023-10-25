import styled from "styled-components";

export const StyledProfileImage = styled.div`
  height: 100%;
  width: 100%;
  background: white;
  padding: 100px 0;
  pointer-events: ${props => props?.inactive ? "none" : "all"};

  .profileImages_wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;

    .form-error {
      width: 100%;
      position: absolute;
      text-align: center;
      color: var(--secondaryErrorColor);
      font-size: var(--errorFontSize);
      top: 22.5px
    }

    .form-success {
      width: 100%;
      position: absolute;
      text-align: center;
      color: var(--successColor);
      font-size: var(--errorFontSize);
      top: 22.5px
    }

    .profileImages_title {
      width: 100%;
      font-size: 32px;
      font-weight: 500;
      text-align: center;
    }

    .profileImages_images-container {
      width: fit-content;
      display: grid;
      grid-template-columns: repeat(6, auto);
      gap: 20px;
      overflow-x: hidden;
      overflow-y: scroll;
      padding: 50px;

      &::-webkit-scrollbar {
        width: 10px;
      }
      
      &::-webkit-scrollbar-track {
        background: #89CFF0;
      }
      
      &::-webkit-scrollbar-thumb {
        background: rgba(0,128,255,1);
      }
      
      .profileImages_images-image-container {
        width: fit-content;
        height: fit-content;
        cursor: pointer;
        
        .selectedProfileImage {
          width: 140px;
          height: 140px;
          border: 5px solid #ff8c00;
          box-shadow: 0px 0px 20px 10px rgba(0,128,255,1);
        }

        .profileImage {
          width: 150px;
          height: 150px;
        }
      }
    }

    .profileImages-buttons-container {
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

      .submitButton-container {
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