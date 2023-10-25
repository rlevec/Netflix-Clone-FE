import styled from "styled-components";


export const StyledHeader = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primaryColorThree);
 

  .header_wrapper {
    width: 95%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    position: relative;

    .form-error {
      width: 100%;
      position: absolute;
      text-align: center;
      color: var(--secondaryErrorColor);
      font-size: var(--errorFontSize);
      top: 17.5px
    }

    .form-success {
      width: 100%;
      position: absolute;
      text-align: center;
      color: var(--successColor);
      font-size: var(--errorFontSize);
      top: 17.5px
    }
    

    .header_logo-categories-container {
      width: fit-content;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 50px;
      cursor: pointer;

      .header_logo-container {
        width: fit-content;
        height: fit-content;

        svg {
          width: 100px;
          height: 50px;
        }
      }

      .header_categories-container {
        width: fit-content;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 25px;

        .header_category {
          color: #e5e5e5;
          display: flex;
          height: 100%;
          cursor: pointer;
          font-weight: 500;
          font-size: 14px;

          &:hover {
            color: #b3b3b3;
          }
        }
        
        .active {
          color: white;
          text-decoration: underline;
          cursor: default;
          
          &:hover {
            color: white;
          }
        }
      }
    }
    
    .header_search-controls-container {
      width: fit-content;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 25px;
      
      .header_search-container {
        height: fit-content;
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        
        .header_search-container-icon {
          width: fit-content;
          height: fit-content;
          
          svg {
            width: 25px;
            height: 25px;
            fill: white;
          }
        }
        
        .header_search-input-container {
          input {
            background-color: var(----secondaryColorFour);
            border: 1px solid white;
            width: 250px;
            height: 30px;
            font-weight: 400;
            font-size: 14px;
            color: white;
            padding: 5px 20px;
            
            &:focus {
              outline: none;
            }
            
            ::placeholder {
              color: var(--secondaryColorThree);
            }
          }
        }
      }
      
      .header_controls-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 5px;
        position: relative;
        height: 60px;
        
        
        .header_controls-img-container {
          width: fit-content;
          height: 32.5px;
          
          img {
            width: 32.5px;
            height: 32.5px;
            border-radius: 4px;
          }
        }
        
        .header_controls-profile-container {
          width: fit-content;
          height: 32.5px;
          display: flex;
          justify-content: center;
          align-items: center;
          
          svg {
            cursor: pointer;
            width: 25px;
            height: 25px;
            fill: white;
          }
        }
        
        .header_controls-dropdown-wrapper {
          position: absolute;
          width: max-content;
          height: fit-content;
          top: 100%;
          right: 0;
          background-color: var(--primaryColorThree);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 10px;
          min-width: 200px;
          padding-top: 20px;
          border: 1px solid #b3b3b3;
          z-index: 4;
          
          .header_profiles-container {
            width: 90%;
            height: fit-content;
            display: flex;
            justify-content: center;
            align-items: start;
            flex-direction: column;
            gap: 10px;
            
            .header_profile-content {
              
              .header_profile-img-name-container {
                width: 100%;
                height: fit-content;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
                
                img {
                  width: 32.5px;
                  height: 32.5px;
                  border-radius: 4px;
                }
                
                .header_profile-name {
                  font-weight: 400;
                  width: 100%;
                  font-size: 12px;
                  color: #e5e5e5;
                  cursor: pointer;
                  
                  &:hover {
                    text-decoration: underline;
                    color: white;
                  }
                }
                
              }
            }
          }
          
          .header_controls-container {
            width: 90%;
            height: fit-content;
            display: flex;
            justify-content: center;
            align-items: start;
            flex-direction: column;
            gap: 10px;

            .header_controls-content {
              width: 100%;

              .header_controls-svg-name-container {
                width: 100%;
                height: fit-content;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;

                .header_controls-svg-container {
                  width: fit-content;
                  height: fit-content;
                  
                  svg {
                    width: 32.5px;
                    height: 22.5px;
                    fill: #b3b3b3;
                  } 
                }

                .header_controls-profile-name {
                  color: #e5e5e5;
                  width: 100%;
                  font-weight: 400;
                  font-size: 12px;
                  cursor: pointer;
                  
                  &:hover {
                    color: white;
                    text-decoration: underline;
                  }
                }

              }
            }
          }
          
          .header_logout-container {
            width: 100%;
            height: fit-content;
            display: flex;
            justify-content: center;
            align-items: center;
            
            .header_logout {
              width: 100%;
              color: #e5e5e5;
              font-weight: 400;
              font-size: 12px;
              text-align: center;
              padding: 20px;
              border-top: 1px solid #b3b3b3;
              cursor: pointer;

              &:hover {
                color: white;
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }
`