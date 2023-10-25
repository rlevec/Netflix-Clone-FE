import styled from "styled-components";

export const StyledStepOne = styled.div`
  width: 30vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  

  .step_one-content-img-container {
    width: 25vw;

    img {
      width: 100%;
    }
  }

  .step_one-content-title {
    width: 100%;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
  }


  .step_one-content-desc-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2.5px;

    .step_one-content-desc {
      font-size: 18px;
      font-weight: 300;
      text-align: center;
    }

    .step_one-content-desc-sec {
      font-size: 18px;
      font-weight: 300;
      text-align: center;
    }
  }
`