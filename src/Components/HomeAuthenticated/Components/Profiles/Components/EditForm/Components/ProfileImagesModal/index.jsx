import React, {useState, useRef} from "react";

import {StyledProfileImagesModal} from "./styledProfileImagesModal.js";

import {useSelector} from "react-redux";

import {useHandleResize} from "./helpers.js";

import {ReactComponent as ArrowLeft} from "../../../../../../../../Assets/svg/arrowLeft.svg";


export default function ProfileImagesModal(props) {
  const {
    setIsProfileImagesModalActive,
    profilesImages,
    profileImagesContent,
    setEditImageActiveSlug
  } = props



  const activeLanguage = useSelector((state) => state?.activeLanguage?.activeLanguage)
  const userEmail = useSelector((state) => state?.userMail?.userMail)

  const mainRef = useRef(null)

  const [mainDivWidth, setMainDivWidth] = useState(0)
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useHandleResize(mainRef, dimensions, setDimensions, setMainDivWidth)


  return (
    <StyledProfileImagesModal>
      <div className="profileImages_wrapper">
        <div className="profileImages_header-subHeader-svg-container" style={{width: `${mainDivWidth}px`}}>
          <div
            className="profileImages_svg-container"
            onClick={() => setIsProfileImagesModalActive(false)}
          >
            <ArrowLeft/>
          </div>
          <div className="profileImages_header-subHeader-container">
            <div
              className="profileImages_header">{activeLanguage === "English" ? profileImagesContent?.headerEng : profileImagesContent?.headerHr}</div>
            <div
              className="profileImages_subHeader">{activeLanguage === "English" ? profileImagesContent?.subhHeaderEng : profileImagesContent?.subhHeaderHr}</div>
          </div>
        </div>
        <div className="profileImages_images-container" ref={mainRef}>
          {profilesImages?.map((el) => {
            const {
              id,
              image,
              frontendSlug
            } = el

            return (
              <div
                className="profileImages_images-image-container" key={id}
                onClick={() => {
                  setEditImageActiveSlug(frontendSlug)
                  setIsProfileImagesModalActive(false)
                }
              }
              >
                <img src={image} alt="profile-image"/>
              </div>
            )
          })}
        </div>
      </div>
    </StyledProfileImagesModal>
  )
}