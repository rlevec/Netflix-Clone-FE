import styled from "styled-components";

export const StyledProfileImagesModal = styled.div`
  height: 100%;
  width: 100%;
  background: #141414;
  padding: 100px 0;

  .profileImages_wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    

    .profileImages_header-subHeader-svg-container {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 25px;

      .profileImages_svg-container {
        width: fit-content;
        height: fit-content;
        cursor: pointer;

        svg {
          width: 75px;
          height: 75px;
          fill: white;
        }
      }

      .profileImages_header-subHeader-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;

        .profileImages_header {
          font-size: 37.5px;
          font-weight: 500;
          color: white;
        }

        .profileImages_subHeader {
          font-size: 30px;
          font-weight: 500;
          color: white;
        }
      }
    }

    .profileImages_images-container {
      width: fit-content;
      display: grid;
      grid-template-columns: repeat(6, auto);
      gap: 20px;

  
        overflow-y: scroll;

        &::-webkit-scrollbar {
          width: 10px;
        }

        &::-webkit-scrollbar-track {
          background: #89CFF0;
        }

        &::-webkit-scrollbar-thumb {
          background: rgba(0, 128, 255, 1);
        }
    
      

      .profileImages_images-image-container {
        width: fit-content;
        height: fit-content;
        cursor: pointer;

        img {
          width: 150px;
          height: 150px;
        }
      }
    }
  }
`