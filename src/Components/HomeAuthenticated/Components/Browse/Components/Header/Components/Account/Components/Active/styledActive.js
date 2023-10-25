import styled from "styled-components";

export const StyledActive = styled.div`
  width: 100%;
  height: fit-content;


  .active_wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: start;
    height: fit-content;
    padding: 25px 0;

    .active_readOnly-container {
      width: fit-content;
      height: fit-content;
      display: flex;
      justify-content: start;
      align-items: start;
      flex-direction: column;
      padding-left: 80px;

      button {
        background-color: #0080ff;
        background-image: linear-gradient(180deg, #0080ff, #0277ec);
        box-shadow: 0 1px 0 rgba(0, 0, 0, .55);
        color: #fff;
        cursor: pointer;
        font-size: 1em;
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

    .active_readOnly-single-content-container {
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 5px;
      width: 100%;
      border-bottom: 1px solid #999999;
      height: 25px;
      padding: 12.5px 0;

      &:nth-child(7) {
        border-bottom: none;
        padding-bottom: 50px;
      }

      .active_readOnly-single-content-label {
        font-weight: 500;
        font-size: 1em;
        color: black;
        width: max-content;
      }

      .active_readOnly-single-content-value {
        color: #737373;
        font-size: 1em;
        font-weight: 400;
      }
    }
  }

  .active_editable-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
    flex-direction: column;

    .active_editable-single-content-container {
      height: 25px;
      width: 100%;
      justify-content: end;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #999999;
      padding: 12.5px 0;

      &:nth-child(7) {
        border-bottom: none;
        padding-bottom: 50px;
      }

      .active_editable-single-content-label {
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
`