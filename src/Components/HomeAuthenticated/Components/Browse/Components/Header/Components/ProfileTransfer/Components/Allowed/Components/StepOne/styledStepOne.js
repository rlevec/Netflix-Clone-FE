import styled from "styled-components";

export const StyledStepOne = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .step_one-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 25px;
    
    .step_one-title {
      color: black;
      font-size: 2.5vw;
      width: 100%;
      text-align: center;
      font-weight: 700;
    }
    
    .step_one-content {
      width: fit-content;
     display: grid;
      grid-template-columns: ${props => props?.accountLength && `repeat(${props?.accountLength}, auto)`};
      gap: 20px;
      
      .step_one-single-content-container {
        width: 200px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        
        &:hover {
          .step_one-single-content-image-container {
            img {
              border: 5px solid #0080ff;
            }
          }
          .step_one-single-content-account-name {
            color: #0080ff;
          }
        }
        
        .step_one-single-content-image-container {
          width: fit-content;
          height: fit-content;
          
          img {
            border-radius: 4px;
            box-sizing: border-box;
            height: 200px;
            width: 200px;
            text-decoration: none;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            cursor: pointer;
            border: 5px solid transparent;
          }
        }
        
        .step_one-single-content-account-name {
          color: grey;
          display: block;
          font-size: 1.3vw;
          min-height: 1.8em;
          overflow: hidden;
          text-align: center;
          text-overflow: ellipsis;
          cursor: pointer;
        }
      }
      
      .active {
        .step_one-single-content-image-container {
          img {
            border: 5px solid #0080ff;
          }
        }
        .step_one-single-content-account-name {
          color: #0080ff
      }
    }
  }
`