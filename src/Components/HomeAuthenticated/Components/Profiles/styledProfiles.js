import styled from "styled-components";

export const StyledProfiles = styled.div`
  height: 100%;
  width: 100%;
  background: #141414;

  .profiles_wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    position: relative;

    .profiles_form-error {
      width: 100%;
      position: absolute;
      text-align: center;
      color: var(--secondaryErrorColor);
      font-size: var(--errorFontSize);
      top: 50px;
    }

    .profiles_form-success {
      width: 100%;
      position: absolute;
      text-align: center;
      color: var(--successColor);
      font-size: var(--errorFontSize);
      top: 50px;
    }

    .profiles_title {
      color: var(--primaryColorOne);
      font-size: 3.5vw;
      font-weight: unset;
      width: 100%;
      text-align: center;
    }

    .profiles_profiles-container {
      width: fit-content;
      height: fit-content;
      display: grid;
      grid-template-columns: repeat(5, auto);
      column-gap: 20px;
      margin: 0 auto;
      

      .profiles_profile-wrapper {
        width: fit-content;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 10px;

        .profiles_profile-title {
          color: grey;
          display: block;
          font-size: 1.3vw;
          min-height: 1.8em;
          overflow: hidden;
          text-align: center;
          text-overflow: ellipsis;
          cursor: pointer;
        }
        
        .profiles_profile-img-container {
          height: fit-content;
          width: fit-content;
          position: relative;

          .profiles_profile-edit-container {
            position: absolute;
            color: white;
            cursor: pointer;
            top: 0;
            left: 0;
            border: none;
            height: 10vw;
            max-height: 200px;
            max-width: 200px;
            min-height: 84px;
            min-width: 84px;
            width: 10vw;
            display: flex;
            justify-content: center;
            align-items: center;
            
            svg {
              width: 35px;
              height: 35px;
              fill: white;

            
            }
          }
          
          .profiles_profile-image-rendered-container {
            width: fit-content;
            height: fit-content;
            
            img {
              border-radius: 4px;
              box-sizing: border-box;
              height: 10vw;
              max-height: 200px;
              max-width: 200px;
              min-height: 84px;
              min-width: 84px;
              position: relative;
              text-decoration: none;
              width: 10vw;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              cursor: pointer;
              border: 2.5px solid transparent;
              opacity: ${props => props?.editFormActive ? 0.5 : 1};
            }
          }
        }
      }


      .profiles_profile-wrapper {
        &:hover {
          
          .profiles_profile-img-container {
            .profiles_profile-image-rendered-container {
              img {
                border: 2.5px solid #E5E5E5;
              }
            }
          }

          .profiles_profile-edit-container {
            color: var(--successColor);
            border: none;
            
            svg {
              border: none;
            }
          }

          .profiles_profile-title {
            color: white;
          }
        }
      }

      .profiles_add-profile-button-wrapper {
        width: fit-content;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 10px;

        .profiles_add-profile-button-title {
          color: grey;
          display: block;
          font-size: 1.3vw;
          min-height: 1.8em;
          overflow: hidden;
          text-align: center;
          text-overflow: ellipsis;
          cursor: pointer;
        }


        .profiles_add-profile-button {
          border-radius: 4px;
          box-sizing: border-box;
          height: 10vw;
          max-height: 200px;
          max-width: 200px;
          min-height: 84px;
          min-width: 84px;
          position: relative;
          text-decoration: none;
          width: 10vw;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          cursor: pointer;
          border: 2.5px solid transparent;


          .profiles_add-profile-svg-container {
            width: fit-content;
            height: fit-content;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: grey;
            border-radius: 50%;
            padding: 0.75vw;

            svg {
              width: 3vw;
              height: 3vw;
            }
          }
        }


        &:hover {
          .profiles_add-profile-button-title {
            color: white;
          }

          .profiles_add-profile-button {
            background-color: #E5E5E5;

            .profiles_add-profile-svg-container {
              svg {
                #Page-1 {
                  #Dribbble-Light-Preview {
                    fill: #E5E5E5;
                  }
                }
              }
            }
          }
        }

      }
    }
    
    .profiles_edit-button-container {
      width: fit-content;
      height: fit-content;

      button {
        background: #fff;
        border: 1px solid #fff;
        color: #000;
        cursor: pointer;
        display: block;
        font-size: 1.2vw;
        margin: 2em 0 1em;
        letter-spacing: 0.5px;
        padding: 0.5em 1.5em;
        font-weight: 400;

        &:hover {
          background: #c00;
          border: 1px solid #c00;
          color: #fff;
        }

        &:disabled {
          opacity: 0.8;
          cursor: not-allowed;
        }
      }
    }

    .profiles_manage-button-container {
      width: fit-content;
      height: fit-content;

      button {
        background-color: transparent;
        border: 1px solid grey;
        color: grey;
        cursor: pointer;
        display: block;
        font-size: 1.2vw;
        margin: 2em 0 1em;
        letter-spacing: 0.5px;
        padding: 0.5em 1.5em;
        font-weight: 400;

        &:hover {
          border-color: var(--primaryColorOne);
          color: var(--primaryColorOne);
        }
        
        &:disabled {
          opacity: 0.8;
          cursor: not-allowed;
        }
      }
    }
  }
`