import styled from "styled-components";

export const StyledContentGrid = styled.div`
  width: 90%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 100px;
  padding-top: 100px;

  .content_grid-single-section-container {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 15px;

    .content_grid-single-section-genre-title-arrows-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .content_grid-single-section-genre-title {
        color: white;
        font-size: 1.4vw;
        font-weight: 500;
        color: #e5e5e5;
      }

      .content_grid-single-section-arrows-container {
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;

        .content_grid-single-section-arrow-container {
          cursor: pointer;
          width: fit-content;
          height: fit-content;

          &:hover {
            svg {
              fill: var(--primaryColorTwo);
            }
          }

          svg {
            width: 25px;
            height: 25px;
            fill: white;
          }
        }
      }
    }

    .content_grid-single-section-images-container {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: start;
      align-items: center;
      flex-direction: row;
      gap: 25px;

      .content_grid-single-content-value-container {
        width: 200px;
        height: 300px;
        position: relative;

        img {
          width: 200px;
          height: 300px;
          cursor: pointer;
          border-radius: 4px;
        }
      }
    }
  }
`;
