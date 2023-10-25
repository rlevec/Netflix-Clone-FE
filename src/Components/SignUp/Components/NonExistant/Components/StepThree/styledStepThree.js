import styled from "styled-components";

export const StyledStepThree = styled.div`
  width: 30vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  
  
  .step_three-checked-icon-container {
    width: 40px;
    height: 40px;
    border: 2.5px solid var(--primaryColorTwo);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    svg {
      width: 25px;
      height: 25px;
      fill: var(--primaryColorTwo);
    }
  }
  
  .step_three-title-container {
    width: 100%;
    text-align: center;
    font-size: 32px;
    font-weight: 500;
  }
  
  .step_three-checked-content-container {
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 25px;
    
    .step_three-checked-single-content-container {
      width: 100%;
      display: flex;
      justify-content: start;
      align-items: center;
      height: fit-content;
      font-size: 18px;
      font-weight: 300;
      gap: 25px;
      
      .step_three-checked-single-content-checked-icon-container {
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
      
      .step_three-checked-single-content-label-container {
        
      }
    }
  }
`